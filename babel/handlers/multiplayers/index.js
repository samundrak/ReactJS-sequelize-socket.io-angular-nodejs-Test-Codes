import connections from '../../model/connection';
import model from '../../model/models';
import Register from '../../handlers/Register';
import  Login from '../../handlers/Login';
let connection = connections();
let models =  model(connection);
module.exports = function(socket) {
    // socket.of('/dailamaara')
    socket.on('connection', client => {
        client.on('loginUser', Login.socket(client,models));
        client.on('registerÚser',Register.socket(client,models));
    });
}