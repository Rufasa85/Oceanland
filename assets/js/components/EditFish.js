var React = require('react');
var EditFish = React.createClass({
	getInitialState: function(){
		return{fishName:this.props.fish.name, fishPicture:this.props.fish.picture, edible:true}
	},
	updateFish: function(e) {
		var self = this;
		e.preventDefault();
		$.ajax({
			url: 'http://localhost:3001/api/fish/' + self.props.fish._id,
			headers: {Authorization: 'Bearer ' + self.props.token},
			type: 'PUT',
			data: {name:self.state.fishName, picture:self.state.fishPicture, edible:self.state.edible},
			success: function (data) {
			}
		})
		this.props.editFishCallback();
	},
	updateName: function(e) {
		this.state.fishName = e.target.value;
		this.setState({fishName:this.state.fishName})
	},
	updatePicture:function(e) {
		this.state.fishPicture = e.target.value;
		this.setState({fishPicture:this.state.fishPicture})
	},
	render: function() {
		return ( 
			<div >
				<form onSubmit={this.updateFish}>
					<legend>Form title</legend>
				
					<div className="form-group">
						<label htmlFor="name">name</label>
						<input type="text" className="form-control" id="name" name='name' onChange={this.updateName} defaultValue={this.props.fish.name}/>
					</div>

					<div className="form-group">
						<label htmlFor="picture">picture URL</label>
						<input type="text" className="form-control" id="picture" name='picture' onChange={this.updatePicture} placeholder="Input field" defaultValue={this.props.fish.picture}/>
					</div>
					<button type="submit" className="btn btn-primary">Update Fish!</button>
				</form>
			</div>
		)
	}
});

module.exports = EditFish;
