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
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4">
							<h1>Login</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4">								
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input type="text" className="form-control" id="email" name='email' placeholder="ex: joe@joe.joe" onChange={this.updateEmail}/>
							</div>
						</div>						
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4">	
							<div className="form-group">
								<label htmlFor="password">password</label>
								<input type="password" className="form-control" id="password" name='password' placeholder="min. 8 characters" onChange={this.updatePassword}/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4">
							<button type="submit" className="btn">Login!</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = Login;
