module.exports =  function(sequelize){
	var model = function(){};
	
	model.prototype.Test =  sequelize.instance.define('test', { company: sequelize.core.STRING, username: sequelize.core.STRING });
	
	model.prototype.User = sequelize.instance.define('users',{
		username :sequelize.core.STRING,
		password : sequelize.core.STRING,
		email : sequelize.core.STRING,
		firstname : sequelize.core.STRING,
		lastname :sequelize.core.STRING

	});
	sequelize.instance.sync({ force: false });
	
	Object.keys(model).forEach(keys=>{
		model[keys] =  new model[keys]();
	});

	return new model();
}

