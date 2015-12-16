var React = require('react');

var Header = React.createClass({
	render:function() {
		var loginOrOut = '';

		return(
			<nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#" onClick={this.props.splash}>OceanLand</a>
				</div>
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav">
						<li><a href="#" onClick={this.props.about}>About</a></li>
						<li><a href="#" onClick={this.props.allFish}>All Fish</a></li>
						<li><a href="#" onClick={this.props.myFish}>My Fish</a></li>
						<li><a href="#" onClick={this.props.newFish}>New Fish</a></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#" onClick={this.props.logout}>Logout</a></li>
						<li><a href="#" onClick={this.props.login}>Login</a></li>
						<li><a href="#" onClick={this.props.signUp}>Signup</a></li>
					</ul>
				</div>
			</nav>
		)
	}
})

module.exports = Header;