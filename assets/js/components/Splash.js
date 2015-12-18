var React = require('react');
var Splash = React.createClass({
	render: function() {
		return ( 
			<div id="fullpage">
			    <div id='fullpage-first' className="section">
			    	<h1 className= 'text-center big-header'> Welcome to OceanLand!*</h1>
			    </div>
			    <div id='fullpage-second' className="section">
			    	<h1 className='text-center big-header'>What We Are All About</h1>
			    	<p><strong>Kogi PBR&B franzen iPhone, shoreditch church-key kitsch YOLO tofu echo park paleo. Cardigan semiotics viral, migas blue bottle distillery 8-bit lo-fi etsy lomo. Keytar listicle marfa, leggings williamsburg trust fund vegan poutine craft beer mixtape yr distillery tofu chartreuse intelligentsia. Direct trade blog sartorial drinking vinegar, DIY health goth hoodie pitchfork whatever cray aesthetic keytar. Swag beard forage, shoreditch chartreuse lo-fi intelligentsia meggings sustainable irony squid neutra. Locavore taxidermy pour-over, schlitz synth lumbersexual truffaut fanny pack pabst narwhal waistcoat viral twee direct trade. Sriracha cornhole green juice, marfa venmo etsy dreamcatcher cronut authentic synth narwhal.</strong></p>
			    </div>
			    <div id='fullpage-third' className="section">
			    	<h1 className='text-center big-header'>Our App</h1>
			    	<p><strong>Kogi PBR&B franzen iPhone, shoreditch church-key kitsch YOLO tofu echo park paleo. Cardigan semiotics viral, migas blue bottle distillery 8-bit lo-fi etsy lomo. Keytar listicle marfa, leggings williamsburg trust fund vegan poutine craft beer mixtape yr distillery tofu chartreuse intelligentsia. Direct trade blog sartorial drinking vinegar, DIY health goth hoodie pitchfork whatever cray aesthetic keytar. Swag beard forage, shoreditch chartreuse lo-fi intelligentsia meggings sustainable irony squid neutra. Locavore taxidermy pour-over, schlitz synth lumbersexual truffaut fanny pack pabst narwhal waistcoat viral twee direct trade. Sriracha cornhole green juice, marfa venmo etsy dreamcatcher cronut authentic synth narwhal.</strong></p>
			    </div>
			    <div id='fullpage-fourth' className="section">
			    	<h1 className='text-center big-header'>Ready? Lets get started! Click 'Signup' to start using our app!</h1>
			    </div>
			</div>
		)
	}
});

module.exports = Splash;

