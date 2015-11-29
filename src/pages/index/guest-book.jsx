var React = require('react');
var moment = require('moment');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
var server = require('../../util/server.js');
var Button = require('material-ui/lib/raised-button');
var TextField = require('material-ui/lib/text-field');
var Card = require('material-ui/lib/card/card');
var CardHeader = require('material-ui/lib/card/card-header');
var CardText = require('material-ui/lib/card/card-text');
var CardTitle = require('material-ui/lib/card/card-title');
require('./guest-book.less');

moment.locale('ko');

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
			page: 1,
			guestBooks: [],
			isLast: false
		};
	},

	componentDidMount() {
		this.loadGuestBook(this.state.page);
	}, 

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.visible === false && this.props.visible === true) {
			window.scrollTo(0, 0);
			server.info.post({ data: 'guest-book visible true' });
		}
	},

	loadGuestBook(page) {
		server.info.post({ data: 'load guest book' });
		server.guestbook.get({
			page: page
		}).then(function(data) {
			var isLast = (data == null || data.length != 10);
			this.setState({ 
				guestBooks: this.state.guestBooks.concat(data),
				page: page,
				isLast: isLast
			});
		}.bind(this)).catch(function(err) {
			alert('error: ' + err);
			console.log(err); //DEBUG
		});
	},

	handleChange(name, evt) {
		var state = {};
		state[name] = evt.target.value;
		this.setState(state);
	},

	moreGuestBook() {
		server.info.post({ data: 'load more guest book, ' + this.state.page+1 });
		this.loadGuestBook(this.state.page + 1);
	},

	onSendBtnClick(evt) {
		if(this.state.name.trim().length === 0) {
			alert('이름을 입력해주세요.');
			return;
		} else if(this.state.msg.trim().length === 0) {
			alert('메시지를 입력해주세요.');
			return;
		}

		server.guestbook.post({
			name: this.state.name,
			msg: this.state.msg
		}).then(function(resp) {
			this.setState({
				page: 1,
				guestBooks: [],
				name: '',
				msg: ''
			}, function() {
				this.loadGuestBook(1);
			}.bind(this));
		}.bind(this)).catch(function(err) {
			alert('error: ' + err);
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
				<Card className="card">
					<CardText>
						<TextField
							floatingLabelText="이름"
							style={{ width: '40%' }}
							value={this.state.name}
							onChange={this.handleChange.bind(this, 'name')}
							{...textFieldProps} />
						<TextField
							floatingLabelText="메시지"
							multiLine={true}
							style={{ width: '100%' }}
							value={this.state.msg}
							onChange={this.handleChange.bind(this, 'msg')}
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
						return (
							<GuestBook 
								key={guestbook.uuid} 
								{...guestbook} />
						);
					})
				}
				{
					this.state.isLast === true ? null : (
						<Button
							label="더보기"
							secondary={true}
							onClick={this.moreGuestBook}
							fullWidth={true}
							backgroundColor="#bbbbbb" />
					)
				}
			</div>
		);
	}
});

var GuestBook = (props) => {
	return (
		<Card className="card guestbook-card">
			<CardText>
				<div className="regdate">{moment(props.regdate).fromNow()}</div>
				<div className="name">{props.name}</div>
				<div className="msg">{props.msg}</div>
			</CardText>
		</Card>
	);
};

module.exports = GuestBookPage;