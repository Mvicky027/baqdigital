import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        idInfo: "CC 1234567890",
        name: "JUAN PEREZ",
        ips: "IPS VIVA 1A PORTAL DEL PRADO",
        cellphone: "300123****",
        email: "JUANPEREZ****@GMAIL.COM"
    });
}
