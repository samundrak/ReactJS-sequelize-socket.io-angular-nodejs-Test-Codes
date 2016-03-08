'use strict';

var _Login = require('../handlers/Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Register from  '../handlers/Register'.HTTP;
// console.log(Login)
module.exports = function (api) {
	api.get('/login', _Login2.default.HTTP);
	return api;
};