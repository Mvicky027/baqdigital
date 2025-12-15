import { z } from "zod";
import { loginSchema, registerSchema } from "@/lib/zod";

const API_URL = "https://baq-digital.onrender.com/api/v1";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    id: number;
    name: string;
    email: string;
    role: string;
    adultMode: boolean;
}

export const authService = {
    async login(credentials: z.infer<typeof loginSchema>): Promise<AuthResponse> {
        console.log("Attempting login with:", credentials.email);
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            console.error("Login failed:", res.status, errorData);
            throw new Error(errorData.message || "Error al iniciar sesión");
        }

        const response = await res.json();
        console.log("Login successful:", response);
        return response.data;
    },

    async register(data: z.infer<typeof registerSchema>): Promise<AuthResponse> {
        const res = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.message || "Error al registrarse");
        }

        const response = await res.json();
        return response.data;
    },
};
