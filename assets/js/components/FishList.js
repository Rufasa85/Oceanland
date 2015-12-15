var React = require('react');
var Fish = require('./Fish');
var FishList = React.createClass({
	render: function() {
		var self = this;
		var fishes = this.props.fishes.map(function(item, idx){
			return <Fish name={item.name} key={idx} fishData={self.props.fishData}/>
		})
		return ( 
			<div>
				{fishes}
			</div>
		)
	}
});

module.exports = FishList;
