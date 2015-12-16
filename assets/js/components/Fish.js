var React = require('react');
var Fish = React.createClass({
	settingFishData:function() {
		this.props.fishData(this.props.fish);
	},
	render: function() {
		return ( 
			<div className='well' onClick={this.settingFishData}>
				<h1>{this.props.fish.name}</h1>
				<p>can i eat it? {this.props.fish.edible + ''}</p>
				<img src={this.props.fish.picture} />
			</div>
		)
	}
});

module.exports = Fish;
