import express from 'express';
import API from './API';
let router = express.Router();
module.exports = app => {
    /* GET home page. */
    router.get('/', (req, res, next) => {
        res.render('index')
    });
    let apiRouter = express.Router();
    app.use('/api', API(apiRouter));
    return router;
};