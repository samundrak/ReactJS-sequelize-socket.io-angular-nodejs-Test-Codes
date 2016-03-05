var ResponseMessages =  React.createClass({
	render: function(){
		return (
			<div>
			<p>{this.props.message}</p>
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
			messages : 'Enter your username and password'
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
		var username = ReactDOM.findDOMNode(this.refs.username);
		this.state.login.username = username.value;
		var password =  ReactDOM.findDOMNode(this.refs.password);
		this.state.login.password =  password.value;
		if(username && password){
			io.emit('loginUser',this.state.login);
		}
	},
	render: function(){
		return (
			<div><form onSubmit={this.handleLogin} >
				<p>Username</p>
				<input type="text"   defaultValue={this.state.login.username} ref="username" name="username"/>
				<br/>
				<p>Password</p>
				<input type="password" ref="password" defaultValue={this.state.login.password} />
				<br/>
				<input type="submit" name="submit" value="submit"/>
				</form> 
				<ResponseMessages  message={this.state.messages} />
			</div>
		)
	}
});

ReactDOM.render(<Form/>,document.getElementById('content'));
