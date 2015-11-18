var React = require('react');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
var Button = require('material-ui/lib/raised-button');
require('./guest-book.less');

var GuestBookPage = React.createClass({
	PropTypes: {
		visible: React.PropTypes.bool.isRequired
	},

	getDefaultProps() {
		return { visible: false };
	},

	render() {
		return (
			<div
				className="guest-book-container"
				style={{ display: this.props.visible === true ? 'block' : 'none' }}>
				<Button label="글 남기기" />
			</div>
		);
	}
});

module.exports = GuestBookPage;