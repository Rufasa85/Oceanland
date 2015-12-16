var React = require('react');
var Fish = React.createClass({
	settingFishData:function() {
		this.props.fishData(this.props.fish);
	},
	deleteBtnClick:function() {
		var self = this;
		console.log(self.props.fish);
		$.ajax({
			url: 'http://localhost:3001/api/fish/' + self.props.fish._id,
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
		var edibility = 'no';
		if (this.props.fish.edible){
			edibility = 'yes';
		};
		if (this.props.canEdit) {
			return ( 
				<div className='well' >
					<h1 onClick={this.settingFishData}>{this.props.fish.name}</h1>
					<p>can i eat it? {edibility}</p>
					<img src={this.props.fish.picture} />
					<button type="button" className="btn btn-info" onClick={this.editBtnClick}>Edit</button>
					<button type="button" className="btn btn-danger" onClick={this.deleteBtnClick}>Delete</button>
				</div>
			)
		}
		else {
			return ( 
				<div className='well' onClick={this.settingFishData}>
					<h1>{this.props.fish.name}</h1>
					<p>can i eat it? {edibility}</p>
					<img src={this.props.fish.picture} />
				</div>
			)
		}
	}
});

module.exports = Fish;
