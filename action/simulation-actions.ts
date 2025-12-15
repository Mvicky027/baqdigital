'use server'

import { auth } from "@/auth"

export async function saveProgress(simulationId: string, step: number, data: any) {
    const session = await auth()

    // In a real application, we would save this to the database
    // For now, we'll just log it to the console to simulate the backend
    console.log(`[Simulation: ${simulationId}] User: ${session?.user?.email || 'Guest'}, Step: ${step}, Data:`, data)

    return {
        success: true,
        message: "Progress saved successfully",
        timestamp: new Date().toISOString()
    }
}
