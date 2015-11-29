var React = require('react');
var ReactDOM = require('react-dom');
var PolymerIcon = require('../comps/polymer-icon.jsx');
var NavBar = require('./comps/nav-bar.jsx');
var HomePage = require('./comps/home.jsx');
var PhotoPage = require('./comps/photo.jsx');
var MapPage = require('./comps/map.jsx');
var GuestBookPage = require('./comps/guest-book.jsx');
require('./index.less');
require('../reset.less');

var Page = React.createClass({
	getInitialState() {
		return { page: 'home' };
	},

	onPageChange(page) {
		this.setState({ page: page });
	},

	render() {
		return (
			<div>
				<HomePage visible={this.state.page === 'home'} onPageChange={this.onPageChange} />
				<NavBar onPageChange={this.onPageChange} />
				<PhotoPage visible={this.state.page === 'photo'} />
				<MapPage visible={this.state.page === 'map'} />
				<GuestBookPage visible={this.state.page === 'guest-book'} />
			</div>
		);
	}
});

ReactDOM.render(<Page />, document.getElementById('root'));