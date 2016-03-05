var Sequelize = require('sequelize');
module.exports =  function(){
var sequelize = new Sequelize("dailamaara","root","",{
	host:'127.0.0.1',
	dialect:'mysql',
	port:3306
});
return {instance:sequelize,core:Sequelize};
}
