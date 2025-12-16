// API Response Types for BAQ+DIGITAL Backend

export interface User {
    id: number
    name: string
    email: string
    role?: string
    adultMode?: boolean
    createdAt?: string
    updatedAt?: string
}

export interface AuthTokens {
    accessToken: string
    refreshToken: string
}

// Backend wraps all responses in this structure
export interface BackendResponse<T> {
    success: boolean
    statusCode: number
    method: string
    path: string
    message: string
    data: T
}

export interface LoginData {
    accessToken: string
    refreshToken: string
    id: number
    name: string
    email: string
    role: string
    adultMode: boolean
}

export interface RegisterData {
    name: string
    email: string
}

export interface RefreshTokenData {
    accessToken: string
}

export interface ApiError {
    message: string
    statusCode: number
    error?: string
}

export interface ApiResponse<T> {
    data?: T
    error?: ApiError
}

// Request Types
export interface LoginRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    name: string
    email: string
    password: string
}

export interface RefreshTokenRequest {
    refreshToken: string
}
