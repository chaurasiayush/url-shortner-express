const express = require('express');
const urlRouter = require('./routers/urlsRouter');
// const connectToDb = require('./dbConnection');
const redirectRouter = require('./routers/redirectRouter');

import connectToDb from "./dbConnection";

connectToDb('mongodb://admin:password@172.18.0.21/');

const app = express();

app.use(express.json());

app.use('/api/v1/', urlRouter);

app.use('/', redirectRouter);
app.listen(3030, () => console.log('started...'));