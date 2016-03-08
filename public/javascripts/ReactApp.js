function formValidator(context){
	var data =  {};
		var checker = [];
		Object.keys(context.refs).forEach(function(keys){
			data[keys] = ReactDOM.findDOMNode(context.refs[keys]).value;
			if(data[keys].length < 1){
				checker.push(keys);
			}
		});
		if(checker.length){
			context.setState({
				messages  : checker.toString() + ' is missing!!!'
			});
			return false;
		}
		context.setState({messages:''});
		return data;
}

var ResponseMessages =  React.createClass({
	close : function(){
		this.props.message = ''
		console.log(1)
	},
	render: function(){
		return (
			<div>
			<p  className="label label-danger">{this.props.message}</p>
			</div>
		)
	}
});   
var Form =  React.createClass({
	getInitialState : function(){
		return {
			login:{
			username : undefined,
			password : "",
			},
			// messages : ''
		}
	},
	componentDidMount: function(){
		var self = this;
		io.on('loginResponse',function(d){
			self.setState({
				// login : self.state.login,
				messages: d.message
			})
		});
	},
	handleLogin: function(e){
		e.preventDefault();
		var data = formValidator(this)
		if(!data) return;
		io.emit('loginUser',data);
	},
	render: function(){
		return (
			<div><form onSubmit={this.handleLogin} >
				<p>Username</p>
				<input className="form-control" type="text"   defaultValue={this.state.login.username} ref="username" name="username"/>
				<br/>
				<p>Password</p>
				<input className="form-control" type="password" ref="password" defaultValue={this.state.login.password} />
				<br/>
				<input className="btn btn-primary" type="submit" name="submit" value="submit"/>
				</form> 
				<ResponseMessages  message={this.state.messages} />
			</div>
		)
	}
});

var RegisterForm = React.createClass({
	getInitialState: function(){
		return {
			messages : ''
		}
	},
	register : function(e){
		e.preventDefault();
		var data = formValidator(this); 
		if(!data)return;
		io.emit('registerÚser',data);
	},
	render :function(){
		return(
			<form onSubmit={this.register}>
			<div className="label label-danger">{this.state.messages}</div>
			<table class="table ">
			<tr><td> Firstname </td>
			<td>
				<input className="form-control"  type="text" ref="firstname"/>
				</td>
			</tr>
			<tr>
			<td>Lastname</td>
			<td>
			<input className="form-control"  type="text" ref="lastname"/>
			</td>
			</tr>
			
			<tr>
			<td>
				Username
			</td>
			<td>
			<input className="form-control"  type="text" ref="username"/>
			</td>
			</tr>

			<tr>
			<td>Password</td>
			<td>
			<input className="form-control"  type="text" ref="password"/>
			</td>
			</tr>

			<tr>
			<td>Email</td>
			<td>
			<input className="form-control" type="text" ref="email"/>
			</td>
			</tr>

			<tr>
			<td>
			<input className="btn btn-primary" type="submit" value="submit"/>
			</td>
			<td></td>
			</tr>

			</table>
			</form>
		)
	}
})
ReactDOM.render(<Form/>,document.getElementById('content'));
ReactDOM.render(<RegisterForm/>,document.getElementById('registerArea'));
