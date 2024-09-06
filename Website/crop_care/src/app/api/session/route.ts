import { NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/options";

export async function GET() {
    const session = await auth();
    // console.log(session);
    return new NextResponse(JSON.stringify(session));
}