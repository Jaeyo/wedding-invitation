var React = require('react');
var ReactDOM = require('react-dom');
var moment = require('moment');
var server = require('../util/server.js');
require('../reset.less');

moment().locale('ko');

var AdminPage = React.createClass({
	getInitialState() {
		return {
			traces: [],
			guestbooks: [],
			filterIp: null
		}
	},

	componentDidMount() {
		server.trace.get()
			.then(function(traces) {
				this.setState({ traces: traces });
			}.bind(this)).catch(function(err) {
				if(typeof err === 'object') err = JSON.stringify(err);
				alert(err);
			});

		server.guestbook.getAll()
			.then(function(docs) {
				this.setState({ guestbooks: docs });
			}.bind(this)).catch(function(err) {
				if(typeof err === 'object') err = JSON.stringify(err);
				alert(err);
			});
	},

	filterIp(ip, evt) {
		evt.stopPropagation();
		if(this.state.filterIp != null) this.setState({ filterIp: null });
		else this.setState({ filterIp: ip });
	},

	render() {
		return (
			<div>
				{
					this.state.guestbooks.map(function(guestbook) {
						if(this.state.filterIp != null && guestbook.ip !== this.state.filterIp) return null;
						return (
							<div style={{ padding: '4px', border: '1px dashed blue' }} key={guestbook.uuid}>
								<div>regdate: {moment(guestbook.regdate).format('llll')}</div>
								<div>
									<span>ip: </span>
									<button onClick={this.filterIp.bind(this, guestbook.ip)}>{guestbook.ip}</button>
								</div>
								<div>name: {guestbook.name}</div>
								<div>msg: {guestbook.msg}</div>
							</div>
						);
					}.bind(this))
				}
				<hr />
				{
					this.state.traces.map(function(trace) {
						if(this.state.filterIp != null && trace.ip !== this.state.filterIp) return null;
						return (
							<div style={{ padding: '4px', border: '1px dashed gray' }} key={trace.regdate}>
								<div>regdate: {moment(trace.regdate).format('llll')}</div>
								<div>
									<span>ip: </span>
									<button onClick={this.filterIp.bind(this, trace.ip)}>{trace.ip}</button>
								</div>
								<div>data: {trace.data}</div>
							</div>
						);
					}.bind(this))
				}
			</div>
		);
	}
});
module.exports = AdminPage;