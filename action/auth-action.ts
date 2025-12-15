"use server";

import { authService } from "@/lib/auth-service";
import { registerSchema, loginSchema } from "@/lib/zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";

export async function loginAction(data: z.infer<typeof loginSchema>) {
    const validatedFields = loginSchema.safeParse(data);

    if (!validatedFields.success) {
        return { error: "Campos inválidos" };
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Credenciales inválidas." };
                default:
                    return { error: "Algo salió mal." };
            }
        }
        throw error;
    }
}

export async function registerAction(data: z.infer<typeof registerSchema>) {
    const validatedFields = registerSchema.safeParse(data);

    if (!validatedFields.success) {
        return { error: "Campos inválidos" };
    }

    try {
        const user = await authService.register(validatedFields.data);

        // Automatically sign in the user after successful registration
        // We use the same credentials they just registered with
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Credenciales inválidas." };
                default:
                    return { error: "Algo salió mal." };
            }
        }

        // Check if it's an error from our service (e.g. user already exists)
        if (error instanceof Error) {
            return { error: error.message };
        }

        throw error;
    }
}
