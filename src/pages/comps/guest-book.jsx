var React = require('react');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
var Button = require('material-ui/lib/raised-button');
var TextField = require('material-ui/lib/text-field');
var Card = require('material-ui/lib/card/card');
var CardHeader = require('material-ui/lib/card/card-header');
var CardText = require('material-ui/lib/card/card-text');
var CardTitle = require('material-ui/lib/card/card-title');
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
			<div className="guest-book-container"
				style={{ display: this.props.visible === true ? 'block' : 'none' }}>
				<Card>
					<CardText>
						<TextField
							floatingLabelText="방명록"
							multiLine={true}
							style={{ width: '100%' }}
							underlineFocusStyle={{ borderColor: 'gray' }}
							floatingLabelStyle={{ color: 'gray' }} />
						<div className="btn-area">
							<Button 
								label="남기기" 
								primary={true}
								backgroundColor="gray" />
						</div>
					</CardText>
				</Card>
			</div>
		);
	}
});

module.exports = GuestBookPage;