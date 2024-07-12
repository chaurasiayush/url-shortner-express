import ShortenUrls from "../models/urlModel";
import {Request, Response} from 'express';


async function handleGetUrlById(req: Request, res: Response) {
    const id = req.params?.id;

    try {
        const shortUrl = await ShortenUrls.findById(id);
        if (!shortUrl) {
            res.status(404).end('not found');
        } 
        else {
            res.status(200).json(shortUrl).end();
        }
    } catch(e) {
        console.error('Exception: ', e);
        res.status(500).end();
    }

}

async function handleGetAllshortenUrls(req: Request, res: Response) {
    const result = await ShortenUrls.find();
    try {
        res.status(200).json(result).end();
    } catch(e) {
        console.error('Exception: ', e);
        res.status(500).end();
    }
}

async function handleAddUrl(req: Request, res: Response) {
    const body = req.body;
    console.log(body);
    const shortUrl = {
        shortUrlToken: body.shortUrlToken,
        originalUrl: body.originalUrl,
        isDeleted: false,
        clicks: 0,
        createdBy: 'admin'
    }
    try {
        const existing = await ShortenUrls.exists({shortUrlToken: body.shortUrlToken});
        if(existing) {
            res.status(400).end('short URL is not available');
        } else {
            const url = await ShortenUrls.create(shortUrl);
            res.status(200).end(JSON.stringify(url.toJSON()));
        }
    } catch(e) {
        console.error('Exception: ', e);
        res.status(500).end();
    }
}

async function handleUpdateUrlById(req: Request, res: Response) {
    const body = req.body;
    const id = body?.id;
    try {
        const result = await ShortenUrls.findByIdAndUpdate(id, body);
        if(!result){
            res.status(404).end('404 not found');
        } else {
            res.status(200).json(result);
        }
    } catch(e) {
        console.error('Exception: ', e);
        res.status(500).end();
    }
}

async function handleDeleteUrlById(req: Request, res: Response) {
    const id = req.params?.id;

    try {
        const result = await ShortenUrls.findById(id);
        
        if(result){
            result.isDeleted = true;
            await ShortenUrls.findByIdAndUpdate(id, result);
            res.status(200).end('deleted');
        }
        else {
            res.status(404).end('not found');
        }
    } catch(e) {
        console.error('Exception: ', e);
        res.status(500).end();
    }
}

export {handleGetUrlById, handleGetAllshortenUrls,
    handleAddUrl, handleUpdateUrlById, handleDeleteUrlById}