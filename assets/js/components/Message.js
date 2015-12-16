var React = require('react');
var Message = React.createClass({
	render: function() {
		return ( 
			<div className='message'>
				<h1>{this.props.message}</h1>
			</div>
		)
	}
});

module.exports = Message;