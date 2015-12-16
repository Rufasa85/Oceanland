var React = require('react');
var ShowFish = React.createClass({
	render: function() {
		return ( 
			<div >
				<h1>{this.props.fishData.name} page</h1>
				<img src={this.props.fishData.picture}/>
				<p>edible? {this.props.fishData.edible + ''}</p>
			</div>
		)
	}
});

module.exports = ShowFish;
