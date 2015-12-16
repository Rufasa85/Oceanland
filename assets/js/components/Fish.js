var React = require('react');
var Fish = React.createClass({
	settingFishData:function() {
		this.props.fishData(this.props.fish);
	},
	render: function() {
		var edibility = 'no';
		if (this.props.fish.edible){
			edibility = 'yes';
		};
		return ( 
			<div className='well' onClick={this.settingFishData}>
				<h1>{this.props.fish.name}</h1>
				<p>can i eat it? {edibility}</p>
				<img src={this.props.fish.picture} />
			</div>
		)
	}
});

module.exports = Fish;
