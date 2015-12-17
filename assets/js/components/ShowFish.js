var React = require('react');
var ShowFish = React.createClass({
	render: function() {
		return ( 
			<div >
				<h1 className='text-center'>{this.props.fishData.name}</h1>
				<img className='img img-responsive big-img center-block' src={this.props.fishData.picture}/>
			</div>
		)
	}
});

module.exports = ShowFish;
