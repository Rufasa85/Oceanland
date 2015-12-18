var React = require('react');
var About = React.createClass({
	render: function() {
		return ( 
			<div >
				<h1>About</h1>
				<h3>OceanLand is a parody SeaWorld app built in ReactJs, NodeJS, Express, and MongoDB by me, Joe Rehfuss, in one week as a class project for a General Assembly Web Development Immersive class.  Read more about OceanLand on the <strong><a href="https://github.com/Rufasa85/Oceanland" target='_blank'>GitHub page</a></strong> for this project.</h3>
			</div>
		)
	}
});

module.exports = About;