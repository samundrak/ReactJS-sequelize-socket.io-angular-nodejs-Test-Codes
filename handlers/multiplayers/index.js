var connection = require('../../model/connection')();
var models =  require('../../model/Models')(connection);
module.exports =  function(socket){
	// socket.of('/dailamaara')
	socket.on('connection',function(client){
		client.on('loginUser',d=>{
			models.User.find( {where:d})
			.then(r=>{
				if(r){
					client.emit('loginResponse',{message:'Welcome! ' +  d.username});
				}else{
					client.emit('loginResponse',{message:'Sorry! no user has found'});
				}
			},e=>{
				client.emit('Error',{success:1,message:"Sorry! no user has found"});
			})
		});
	});
}	