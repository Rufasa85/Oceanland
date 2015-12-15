var React = require('react');
var Fish = React.createClass({
	settingFishData:function() {
		this.props.fishData(this.props.name);
	},
	render: function() {
		return ( 
			<div className='well' onClick={this.settingFishData}>
				<h1>{this.props.name}</h1>
			</div>
		)
	}
});

module.exports = Fish;
