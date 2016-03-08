'use strict';

var _connection = require('../../model/connection');

var _connection2 = _interopRequireDefault(_connection);

var _models = require('../../model/models');

var _models2 = _interopRequireDefault(_models);

var _Register = require('../../handlers/Register');

var _Register2 = _interopRequireDefault(_Register);

var _Login = require('../../handlers/Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = (0, _connection2.default)();
var models = (0, _models2.default)(connection);
module.exports = function (socket) {
    // socket.of('/dailamaara')
    socket.on('connection', function (client) {
        client.on('loginUser', _Login2.default.socket(client, models));
        client.on('registerÚser', _Register2.default.socket(client, models));
    });
};