var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var FishList = require('./FishList');
var About = require('./About');
var Splash = require('./Splash');
var Login = require('./Login');
var SignUp = require('./SignUp');
var NewFish = require('./NewFish');
var ShowFish = require('./ShowFish');
var EditFish = require('./EditFish');

var MyApp = React.createClass({
	getInitialState:function() {
		return {content:<Splash/>, fishData:{}, fishes:[], myFishes:[], loggedIn:false}
	},
	//setting click listeners for navbar
	splashClick:function() {
		this.setState({content:<Splash/>, message:''})
	},
	aboutClick:function() {
		this.setState({content:<About/>, message:''})
	},
	//should get all the fish
	allFishClick: function() {
		var self = this;
		$.ajax({
			type: "GET",
			url: '/api/fish', 
			success: function(data){
				self.state.fishes = data;
				self.setState({fishes:data, content:<FishList fishes={self.state.fishes} fishData={self.getFishData}/>, message:''})
			}
		})
	},
	//should get user created fish, allow for edit and delete, for later
	myFishClick:function() {
		if (this.state.loggedIn){
			var self = this;
			var myFishes = [];
			$.ajax({
				type: "GET",
				url: '/api/fish', 
				success: function(data){
					console.log('data', data)
					data.forEach(function(fish) {
						if (fish.creator === self.state.userId) {
							myFishes.push(fish);
						}
					});
					self.state.fishes = myFishes;
					self.setState({fishes:self.state.fishes, content:<FishList fishes={self.state.fishes} fishData={self.getFishData} canEdit='true' deleteBtnCallback={self.deleteBtnCallback} editBtnCallback={self.editBtnCallback} token={self.state.token}/>});
				}
			})
		}
		else{
			this.setState({message:'Please log in to continue'});
			this.loginClick();
		}
	},
	deleteBtnCallback:function() {
		this.state.message= 'Deleted successfully!';
		this.setState({message:this.state.message});
		this.myFishClick();
	},
	editBtnCallback:function(fish){
		this.editFishClick(fish);
	},
	newFishClick:function() {
		if (this.state.loggedIn){
			this.setState({content:<NewFish userId={this.state.userId} token={this.state.token} redirect={this.allFishClick}/>});	
		}
		else{
			this.setState({message:'Please log in to continue'});
			this.loginClick();
		}
	}, 
	editFishClick:function(fish) {
		this.setState({content:<EditFish fish={fish} editFishCallback={this.editFishCallback} token={this.state.token}/>})
	},
	editFishCallback:function(){
		this.state.message = 'Edit successful!';
		this.setState({message:this.state.message});
		this.myFishClick();
	},
	loginClick:function() {
		this.setState({content:<Login authenticate={this.authenticate}/>})
	},
	authenticate:function(user) {
		if(user.user) {
			this.state.loggedIn = true;
			this.state.token = user.token;
			this.state.userName = user.user.username;
			this.state.userId = user.user.id;
			this.state.message = 'Logged in successfully';
			this.setState({message:this.state.message, userName:this.state.userName, token:this.state.token, userId:this.state.userId, loggedIn:this.state.loggedIn});
			this.myFishClick();
		}
		else {
			this.state.message = 'Login falied'
			this.setState({message:this.state.message})
			this.loginClick();
		}
	},
	logoutClick:function() {		
		this.state.loggedIn = false;
		this.state.token = '';
		this.state.userName = '';
		this.state.userId = '';
		this.state.message = 'Logged out successfully'
		this.setState({message:this.state.message, content:<Splash/>, userName:this.state.userName, token:this.state.token, userId:this.state.userId, loggedIn:this.state.loggedIn})
	},
	signUpClick:function() {
		this.setState({content:<SignUp callback={this.signUpCallback} error={this.signUpError}/>})
	},
	signUpCallback:function() {
		this.state.message = 'Great! now login!';
		this.setState({message:this.state.message});
		this.loginClick();
	},
	signUpError:function() {
		this.state.message = 'Signup error. Please try again.'
		this.setState({message:this.state.message});
		this.signUpClick();
	},
	getFishData:function(fish){
		this.state.fishData = fish;
		this.setState({fishData:fish});
		this.showFishClick();
	},
	showFishClick:function() {
		this.setState({content:<ShowFish fishData={this.state.fishData}/>})
	},
	render: function() {
		return (
			<div>
				<Header about={this.aboutClick} allFish={this.allFishClick} splash={this.splashClick} myFish={this.myFishClick} newFish={this.newFishClick} login={this.loginClick} logout = {this.logoutClick} signUp={this.signUpClick} />
				<div className='container'>
						{this.state.message}
						{this.state.content}
				</div>
				<Footer/>
			</div>
		)
	}
})

module.exports = MyApp;