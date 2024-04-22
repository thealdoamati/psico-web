import fs from 'fs';
import path from 'path';

export default function handler(req: any, res: { setHeader: (arg0: string, arg1: string) => void; send: (arg0: Buffer) => void; }) {
    const imagePath = path.resolve('./public/images', 'LogoOG.png');
    const imageBuffer = fs.readFileSync(imagePath);

    res.setHeader('Content-Type', 'image/png'); // Atualize também para 'image/png' se for uma imagem .png
    res.send(imageBuffer);
}
