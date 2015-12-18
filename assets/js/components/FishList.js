var React = require('react');
var Fish = require('./Fish');
var FishList = React.createClass({
	render: function() {
		var self = this;
		var fishes;
		var header;
		if (this.props.canEdit) {
			header = 'My fish';
			fishes = this.props.fishes.map(function(item, idx){
				return <Fish fish={item} key={idx} fishData={self.props.fishData} canEdit="true" deleteBtnCallback={self.props.deleteBtnCallback} editBtnCallback={self.props.editBtnCallback} token={self.props.token}/>
			})
		}
		else {
			header='All the fish!';
			fishes = this.props.fishes.map(function(item, idx){
				return <Fish fish={item} key={idx} fishData={self.props.fishData}/>
			})
		}
		return ( 
			<div>
				<h1>{header}</h1>
				{fishes}
			</div>
		)
	}
});

module.exports = FishList;
