var React = require('react');
var ShowFish = React.createClass({
	render: function() {
		return ( 
			<div >
				<h1>{this.props.fishName} page</h1>
			</div>
		)
	}
});

module.exports = ShowFish;
