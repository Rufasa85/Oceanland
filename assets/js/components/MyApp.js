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
		return {content:<Splash/>, fishName:'Steve'}
	},
	fishes:[{name:'seahorse'},{name:'Joe'}],
	//setting click listeners for navbar
	splashClick:function() {
		this.setState({content:<Splash/>})
	},
	aboutClick:function() {
		this.setState({content:<About/>})
	},
	allFishClick: function() {
		this.setState({content:<FishList fishes={this.fishes} fishData={this.getFishData}/>})
	},
	myFishClick:function() {
		this.setState({content:<FishList fishes={this.fishes} fishData={this.getFishData}/>})
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