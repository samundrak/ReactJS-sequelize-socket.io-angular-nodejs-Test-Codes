import Login from '../handlers/Login';
// import Register from  '../handlers/Register'.HTTP;
// console.log(Login)
module.exports = api => {
	api.get('/login',Login.HTTP);
	return api;
}
