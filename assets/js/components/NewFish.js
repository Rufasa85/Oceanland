var React = require('react');
var NewFish = React.createClass({
	getInitialState: function(){
		return{fishName:'', fishPicture:'', edible:true}
	},
	createFish: function(e) {
		var self = this;
		e.preventDefault();
		$.ajax({
			url: '/api/fish',
			headers: {Authorization: 'Bearer ' + self.props.token},
			type: 'POST',
			data: {name:self.state.fishName, picture:self.state.fishPicture, creator:self.props.userId, edible:self.state.edible},
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
				<form onSubmit={this.createFish}>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3">
							<h1>New Fish</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3">
							<div className="form-group">
								<label htmlFor="name">name</label>
								<input type="text" className="form-control" id="name" name='name' onChange={this.updateName} placeholder="Common or scientific. Whichever"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3">
							<div className="form-group">
								<label htmlFor="picture">picture URL</label>
								<input type="text" className="form-control" id="picture" name='picture' onChange={this.updatePicture} placeholder="ex: http://www.google.com/"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3">
							<button type="submit" className="btn btn-primary">Create Fish!</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = NewFish;
