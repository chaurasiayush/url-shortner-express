import express from 'express';
import { handleUrlRedirectByToken } from '../controllers/redirectController';
// import express from 'express';

const redirectRouter = express.Router();

redirectRouter.get('/:id', handleUrlRedirectByToken);


module.exports = redirectRouter;
