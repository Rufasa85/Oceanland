var React = require('react');
var Footer = React.createClass({
	render: function() {
		return ( 
			<div className='footer'>
				<h4 className='text-center'> &copy;2015 Joe Rehfuss <span><a href="https://www.linkedin.com/in/joerehfuss"><i className="fa fa-linkedin-square" target='_blank'></i></a></span><span><a href="https://github.com/Rufasa85" target='_blank'><i className = 'fa fa-github'></i></a></span></h4>
			</div>
		)
	}
});

module.exports = Footer;