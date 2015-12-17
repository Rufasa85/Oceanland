var React = require('react');
var Login = React.createClass({
	getInitialState:function(){
		return {email:'', password:''}
	},
	afterLogin:function(e){
		var self = this;
		e.preventDefault();
		$.ajax({
			url: '/api/auth',
			type: 'POST',
			data: {email:self.state.email, password:self.state.password},
			success: function (data) {
				console.log(data);
				self.props.authenticate(data);
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
	render: function() {
		return ( 
			<div >
				<form onSubmit={this.afterLogin}>
					<legend>Form title</legend>
				
					<div className="form-group">
						<label htmlFor="email">email</label>
						<input type="text" className="form-control" id="email" name='email' placeholder="Input field" onChange={this.updateEmail}/>
					</div>

					<div className="form-group">
						<label htmlFor="password">password</label>
						<input type="password" className="form-control" id="password" name='password' placeholder="Input field" onChange={this.updatePassword}/>
					</div>
					<button type="submit" className="btn btn-primary">Login!</button>
				</form>
			</div>
		)
	}
});

module.exports = Login;
