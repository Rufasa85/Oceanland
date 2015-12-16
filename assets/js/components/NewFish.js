var React = require('react');
var NewFish = React.createClass({
	getInitialState: function(){
		return{fishName:'rachel', fishPicture:'joe@joe.joe', edible:false}
	},
	createFish: function(e) {
		var self = this;
		e.preventDefault();
		$.ajax({
			url: 'http://localhost:3001/api/fish',
			type: 'POST',
			data: {name:self.state.fishName, picture:self.state.fishPicture, edible:self.state.edible},
			success: function (data) {
			}
		})
		this.props.redirect();
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
				<form  onSubmit={this.createFish}>
					<legend>Form title</legend>
				
					<div className="form-group">
						<label htmlFor="name">name</label>
						<input type="text" className="form-control" id="name" name='name' onChange={this.updateName} placeholder="Input field"/>
					</div>

					<div className="form-group">
						<label htmlFor="picture">picture URL</label>
						<input type="text" className="form-control" id="picture" name='picture' onChange={this.updatePicture} placeholder="Input field"/>
					</div>
					<button type="submit" className="btn btn-primary">Create Fish!</button>
				</form>
			</div>
		)
	}
});

module.exports = NewFish;
