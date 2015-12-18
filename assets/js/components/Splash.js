var React = require('react');
var Splash = React.createClass({
	render: function() {
		return ( 
			<div id="fullpage">
			    <div id='fullpage-first' className="section">
			    	<h1 className= 'text-center big-header'> Welcome to OceanLand!</h1>
			    </div>
			    <div id='fullpage-second' className="section">
			    	<h1 className='text-center big-header'>What We Are All About</h1>
			    	<div className="row">
			    		<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1">
			    			<h3><strong>Here at OceanLand, we strive to provide the highest quality marine life park experience for both our customers and our animals.  Visitors delight in our wide variety of exhibits,  and our animals are subject to world-leading care and attention. The Earth's surface is 70% water, and here at OceanLand we believe humans can learn a great deal from their aquatic cousins.  OceanLand: The pinnacle of marine life parks.</strong></h3>
			    		</div>
			    	</div>
			    </div>
			    <div id='fullpage-third' className="section">
			    	<h1 className='text-center big-header'>Our App</h1>
			    	<div className="row">
			    		<div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1">
			    			<h3><strong>Interested in visiting our park but can't make the trip? Our app is here to save the day! Browse pictures of various animals you can find around the park.  Create an account and you can add animals and pictures of your own. Try it today!</strong></h3>
			    		</div>
			    	</div>
			    </div>
			    <div id='fullpage-fourth' className="section">
				    <div className="row">
				    	<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2">
				    		<h1 className='text-center big-header'>Ready? Lets get started! Use the navigation bar to have a look around!</h1>
				    	</div>
				    </div>
			    </div>
			</div>
		)
	}
});

module.exports = Splash;

