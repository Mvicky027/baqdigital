import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        idInfo: "CC 1045744216",
        name: "MARIA VICTORIA VILORIA ANAYA",
        ips: "IPS VIVA 1A PORTAL DEL PRADO",
        cellphone: "304596****",
        email: "MVVILORIAANA****@GMAIL.COM"
    });
}
