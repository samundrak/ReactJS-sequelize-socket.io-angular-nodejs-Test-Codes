'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _API = require('./API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
module.exports = function (app) {
    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.render('index');
    });
    var apiRouter = _express2.default.Router();
    app.use('/api', (0, _API2.default)(apiRouter));
    return router;
};