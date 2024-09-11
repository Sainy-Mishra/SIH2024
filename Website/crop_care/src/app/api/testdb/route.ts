import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/middleware/disease';

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        await connectDB();
        return NextResponse.json({ message: 'Database connected' });
    } catch (error) {
        return NextResponse.json({ message: 'Database connection failed' });
    }
}