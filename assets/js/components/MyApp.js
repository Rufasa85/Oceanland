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

var MyApp = React.createClass({
	getInitialState:function() {
		return {content:<Splash/>, fishName:'Steve', fishes:[]}
	},
	//setting click listeners for navbar
	splashClick:function() {
		this.setState({content:<Splash/>})
	},
	aboutClick:function() {
		this.setState({content:<About/>})
	},
	//should get all the fish
	allFishClick: function() {
		var self = this;
		$.ajax({
			type: "GET",
			url: 'http://localhost:3001/api/fish', 
			success: function(data){
				self.state.fishes = data;
				self.setState({fishes:data, content:<FishList fishes={self.state.fishes} fishData={self.getFishData}/>})
			}
		})
	},
	//should get user created fish, allow for edit and delete, for later
	myFishClick:function() {
		this.setState({content:<FishList fishes={this.state.fishes} fishData={this.getFishData}/>})
	},
	newFishClick:function() {
		this.setState({content:<NewFish/>})
	}, 
	loginClick:function() {
		this.setState({content:<Login/>})
	},
	signUpClick:function() {
		this.setState({content:<SignUp/>})
	},
	getFishData:function(name){
		this.state.fishName = name;
		this.setState({fishName:name});
		this.showFishClick();
	},
	showFishClick:function() {
		this.setState({content:<ShowFish fishName={this.state.fishName}/>})
	},
	render: function() {
		return (
			<div className='container'>
				<Header about={this.aboutClick} allFish={this.allFishClick} splash={this.splashClick} myFish={this.myFishClick} newFish={this.newFishClick} login={this.loginClick} signUp={this.signUpClick} />
				{this.state.content}
				<Footer/>
			</div>
		)
	}
})

module.exports = MyApp;