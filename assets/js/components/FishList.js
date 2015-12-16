var React = require('react');
var Fish = require('./Fish');
var FishList = React.createClass({
	render: function() {
		var self = this;
		var fishes;
		if (this.props.canEdit) {
			console.log('From fishList:'+this.props.canEdit)
			fishes = this.props.fishes.map(function(item, idx){
				return <Fish fish={item} key={idx} fishData={self.props.fishData} canEdit="true" deleteBtnCallback={self.props.deleteBtnCallback} editBtnCallback={self.props.editBtnCallback} token={self.props.token}/>
			})
		}
		else {
			fishes = this.props.fishes.map(function(item, idx){
				return <Fish fish={item} key={idx} fishData={self.props.fishData}/>
			})
		}
		return ( 
			<div>
				{fishes}
			</div>
		)
	}
});

module.exports = FishList;
