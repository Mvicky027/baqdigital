import z, { object, string } from "zod";

export const loginSchema = object({
    email: string({ required_error: 'Email is required' })
        .min(1, "Email IS required")
        .email('Invalid email address'),
    password: string({ required_error: 'Password is required' })
        .min(1, "Password is required")
        .min(6, 'Password must be more than 6 characters')
        .max(32, 'Password must be less than 32 characters')
})

export const registerSchema = object({
    name: string({ required_error: 'Name is required' })
        .min(1, "Name is required")
        .max(100, 'Name must be less than 100 characters'),
    email: string({ required_error: 'Email is required' })
        .min(1, "Email IS required")
        .email('Invalid email address'),
    password: string({ required_error: 'Password is required' })
        .min(1, "Password is required")
        .min(6, 'Password must be more than 6 characters')
        .max(32, 'Password must be less than 32 characters'),
    confirmPassword: string({ required_error: 'Confirm Password is required' })
        .min(1, "Confirm Password is required")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});



export const createTicketSchema = z.object({
    title: z.string().min(5, "El título debe tener al menos 5 caracteres"),
    description: z.string().min(10, "La descripción debe ser más detallada"),
    priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
})

export type CreateTicketValues = z.infer<typeof createTicketSchema>

export const createUserSchema = z.object({
    name: z.string().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
    email: z.string().min(1, "El email es requerido").email("Email inválido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres").max(32, "Máximo 32 caracteres"),
    role: z.enum(["CLIENT", "AGENT"], { required_error: "Debes seleccionar un rol" }),
})

export type CreateUserValues = z.infer<typeof createUserSchema>