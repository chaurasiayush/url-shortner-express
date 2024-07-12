import express from "express";
const { handleGetUrlById, handleAddUrl, handleDeleteUrlById, handleUpdateUrlById, handleGetAllshortenUrls } = require('../controllers/urlController');

const urlRouter = express.Router();

urlRouter.get('/:id', handleGetUrlById);
urlRouter.delete('/:id', handleDeleteUrlById);
urlRouter.put('/:id', handleUpdateUrlById);

urlRouter.get('/', handleGetAllshortenUrls)
urlRouter.post('/', handleAddUrl);

module.exports = urlRouter;