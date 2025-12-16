// API Client for BAQ+DIGITAL Backend
import type {
    LoginRequest,
    LoginData,
    RegisterRequest,
    RegisterData,
    RefreshTokenData,
    User,
    ApiError,
    BackendResponse,
} from "@/types/api"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://baq-digital.onrender.com/api/v1"

class ApiClient {
    private baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<{ data?: T; error?: ApiError }> {
        try {
            const url = `${this.baseUrl}${endpoint}`
            const response = await fetch(url, {
                ...options,
                headers: {
                    "Content-Type": "application/json",
                    ...options.headers,
                },
            })

            const json: BackendResponse<T> = await response.json()

            if (!response.ok || !json.success) {
                return {
                    error: {
                        message: json.message || "An error occurred",
                        statusCode: response.status,
                    },
                }
            }

            return { data: json.data }
        } catch (error) {
            console.error("API request failed:", error)
            return {
                error: {
                    message: "Network error. Please check your connection.",
                    statusCode: 0,
                },
            }
        }
    }

    // Auth endpoints
    async login(credentials: LoginRequest): Promise<{ data?: LoginData; error?: ApiError }> {
        return this.request<LoginData>("/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
        })
    }

    async register(userData: RegisterRequest): Promise<{ data?: RegisterData; error?: ApiError }> {
        return this.request<RegisterData>("/auth/register", {
            method: "POST",
            body: JSON.stringify(userData),
        })
    }

    async refreshToken(refreshToken: string): Promise<{ data?: RefreshTokenData; error?: ApiError }> {
        return this.request<RefreshTokenData>("/auth/refresh", {
            method: "POST",
            body: JSON.stringify({ refreshToken }),
        })
    }

    // User endpoints
    async getUserProfile(userId: number, accessToken: string): Promise<{ data?: User; error?: ApiError }> {
        return this.request<User>(`/users/profile/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}

export const apiClient = new ApiClient(API_BASE_URL)
