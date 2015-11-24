var React = require('react');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
var server = require('../../util/server.js');
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

	getInitialState() {
		return {
			name: '',
			msg: '',
			lastGuestBookUUID: null,
			guestBooks: []
		};
	},

	componentDidMount() {
		this.loadGuestBook();
	}, 

	loadGuestBook() {
		server.guestbook.get({
			startUUID: this.state.lastGuestBookUUID == null ? null : this.state.lastGuestBookUUID,
			count: 10
		}).then(function(resp) {
			if(resp.ok) {
				this.setState({ guestBooks: this.state.guestBooks.concat(resp.guestBooks) });
			} else {
				alert('error: ' + JSON.stringify(resp.error));
				console.log(resp.error); //DEBUG
			}
		}.bind(this)).catch(function(err) {
			alert('error: ' + JSON.stringify(err));
			console.log(err); //DEBUG
		});
	},

	onChangeName(evt) {
		this.setState({ name: evt.target.value });
	},

	onChangeMsg(evt) {
		this.setState({ msg: evt.target.value });
	},

	onSendBtnClick(evt) {
		server.guestbook.post({
			name: this.state.name,
			msg: this.state.msg
		}).then(function(resp) {

		}).catch(function(err) {
			alert('error: ' + JSON.stringify(err));
			console.log(err); //DEBUG
		});
	},

	render() {
		var textFieldProps = {
			underlineFocusStyle: { borderColor: 'gray' },
			floatingLabelStyle: { color: 'gray' }
		};

		return (
			<div className="guest-book-container"
				style={{ display: this.props.visible === true ? 'block' : 'none' }}>
				<Card>
					<CardText>
						<TextField
							floatingLabelText="이름"
							style={{ width: '40%' }}
							onChange={this.onChangeName}
							{...textFieldProps} />
						<TextField
							floatingLabelText="메시지"
							multiLine={true}
							style={{ width: '100%' }}
							onChange={this.onChangeMsg}
							{...textFieldProps} />
						<div className="btn-area">
							<Button 
								label="남기기" 
								primary={true}
								onClick={this.onSendBtnClick}
								backgroundColor="gray" />
						</div>
					</CardText>
				</Card>
				{
					this.state.guestBooks.map(function(guestbook) {
						return (<GuestBook {...guestbook} />);
					})
				}
			</div>
		);
	}
});

var GuestBook = (props) => {
	return (
		<Card>
			<CardText>
				<div>{props.name}</div>
				<div>{props.msg}</div>
			</CardText>
		</Card>
	);
};

module.exports = GuestBookPage;