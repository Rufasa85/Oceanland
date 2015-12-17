var React = require('react');
var Fish = React.createClass({
	settingFishData:function() {
		this.props.fishData(this.props.fish);
	},
	deleteBtnClick:function() {
		var self = this;
		console.log(self.props.fish);
		$.ajax({
			url: '/api/fish/' + self.props.fish._id,
			headers: {Authorization: 'Bearer ' + self.props.token},
			type: 'DELETE',
			success:function() {
				self.props.deleteBtnCallback();
			}
		})
	},
	editBtnClick:function(){
		this.props.editBtnCallback(this.props.fish);
	},
	render: function() {
		//checking for edibility, will add back in if i can figure out incorporating radio buttons
		// var edibility = 'no';
		// if (this.props.fish.edible){
		// 	edibility = 'yes';
		// };
		if (this.props.canEdit) {
			return ( 
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<div className='well' >
						<a href='#' onClick={this.settingFishData}><h3 className='text-center'>{this.props.fish.name}</h3></a>
						<img className='img img-responsive fish-list-img center-block' src={this.props.fish.picture} />
						<button type="button" className="btn" id='edit-btn' onClick={this.editBtnClick}>Edit</button>
						<button type="button" className="btn" onClick={this.deleteBtnClick}>Delete</button>
					</div>
				</div>
			)
		}
		else {
			return ( 
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<div className='well'>
						<a href='#' onClick={this.settingFishData}><h3 className='text-center'>{this.props.fish.name}</h3></a>
						<img className='img img-responsive fish-list-img center-block' src={this.props.fish.picture} />
					</div>
				</div>
			)
		}
	}
});

module.exports = Fish;
