var React = require('react');
var SignUp = React.createClass({
		getInitialState:function(){
		return {email:'', password:'', username:''}
	},
	afterSignup:function(e){
		var self = this;
		e.preventDefault();
		$.ajax({
			url: 'http://localhost:3001/api/users',
			type: 'POST',
			data: {email:self.state.email, password:self.state.password, username:self.state.username},
			success: function (data) {
				console.log(data);
				if (data.error) {
					self.props.error();
				}
				else{
					self.props.callback();
				}
			}
		})
	},
	updateEmail:function(e) {
		this.state.email = e.target.value;
		this.setState({email:this.state.email})
	},
	updatePassword:function(e) {
		this.state.password = e.target.value;
		this.setState({password:this.state.password});
	},
	updateUsername:function(e) {
		this.state.username = e.target.value;
		this.setState({username:this.state.username});
	},
	render: function() {
		return ( 
			<div >
				<form onSubmit={this.afterSignup}>
					<legend>Form title</legend>
				
					<div className="form-group">
						<label htmlFor="email">email</label>
						<input type="text" className="form-control" id="email" name='email' placeholder="Input field" onChange={this.updateEmail}/>
					</div>

					<div className="form-group">
						<label htmlFor="password">password</label>
						<input type="password" className="form-control" id="password" name='password' placeholder="Input field" onChange={this.updatePassword}/>
					</div>
					<div className="form-group">
						<label htmlFor="username">username</label>
						<input type="username" className="form-control" id="username" name='username' placeholder="Input field" onChange={this.updateUsername}/>
					</div>
					<button type="submit" className="btn btn-primary">Sign Up!</button>
				</form>
			</div>
		)
	}
});

module.exports = SignUp;
