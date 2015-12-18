var React = require('react');
var SignUp = React.createClass({
		getInitialState:function(){
		return {email:'', password:'', username:''}
	},
	afterSignup:function(e){
		var self = this;
		e.preventDefault();
		$.ajax({
			url: '/api/users',
			type: 'POST',
			data: {email:self.state.email, password:self.state.password, username:self.state.username},
			success: function (data) {
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
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4">
							<h1>Signup</h1>
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
							<div className="form-group">
								<label htmlFor="username">username</label>
								<input type="text" className="form-control" id="username" name='username' placeholder="Stay classy! >:(" onChange={this.updateUsername}/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4">
							<button type="submit" className="btn">SignUp!</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = SignUp;