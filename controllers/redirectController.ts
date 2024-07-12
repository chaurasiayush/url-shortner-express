import ShortenUrls from '../models/urlModel';
import { Request, Response } from 'express';
// const shortenUrls = require('../models/urlModel');

const handleUrlRedirectByToken = async (req: Request, res: Response) => {
    const token = req.params.id;
    const shortenUrl = await ShortenUrls.findOne({shortUrlToken: token});

    if(shortenUrl && !shortenUrl.isDeleted) {
        res.status(308).setHeader('Location', shortenUrl.originalUrl).end();
        shortenUrl.clicks++;
        await shortenUrl.updateOne(shortenUrl);
    } else{
        res.status(404).end('This short url does not exist');
    }
}

export {handleUrlRedirectByToken}