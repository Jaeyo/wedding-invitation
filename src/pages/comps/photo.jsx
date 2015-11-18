var React = require('react');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
require('./photo.less');

var PhotoPage = React.createClass({
	PropTypes: {
		visible: React.PropTypes.bool.isRequired
	},

	getDefaultProps() {
		return { visible: false };
	},

	render() {
		return (
			<div
				className="photo-container"
				style={{ display: this.props.visible === true ? 'block' : 'none'}}>
				photo
			</div>
		);
	}
});

module.exports = PhotoPage;