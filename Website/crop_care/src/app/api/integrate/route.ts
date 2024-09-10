import { NextRequest, NextResponse } from 'next/server';
import * as tf from '@tensorflow/tfjs';

export async function POST(req: NextRequest, res: NextResponse) {
    if (!req.body) {
        return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }
    let model;
    model = undefined;
    model = await tf.loadLayersModel("https://raw.githubusercontent.com/SounakShome/SIH/main/Website/crop_care/src/models/potato/model.json");
    const imageBuffer = await req.arrayBuffer();
    const image = new Image();
    const imageData = new Uint8Array(imageBuffer);
    const blob = new Blob([imageData], { type: 'image/jpeg' });
    const url = URL.createObjectURL(blob);

    await new Promise((resolve) => {
        image.onload = resolve;
        image.src = url;
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 150;
    canvas.height = 150;
    if (ctx) {
        ctx.drawImage(image, 0, 0, 150, 150);
    } else {
        throw new Error("Failed to get 2D context");
    }

    const imageDataTensor = tf.browser.fromPixels(canvas)
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims(0);

    const prediction = model.predict(imageDataTensor) as tf.Tensor;
    const predictedClass = prediction.argMax(-1).dataSync()[0];

    return NextResponse.json({ predictedClass });
}

