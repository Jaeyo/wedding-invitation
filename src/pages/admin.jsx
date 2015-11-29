var React = require('react');
var ReactDOM = require('react-dom');
var PolymerIcon = require('../comps/polymer-icon.jsx');
var OverviewPage = require('./admin/overview.jsx');
require('../reset.less');

var AdminPage = React.createClass({
	getInitialState() {
		return {
			page: {
				name: 'overview',
				query: null
			}
		};
	},

	handlePageChange(page) {
		this.setState({ page: page });
	},

	render() {
		return (
			<OverviewPage handlePageChange={this.handlePageChange} />
		);
	}
});

module.exports = AdminPage;