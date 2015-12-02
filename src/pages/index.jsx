var React = require('react');
var ReactDOM = require('react-dom');
var PolymerIcon = require('../comps/polymer-icon.jsx');
var NavBar = require('./index/nav-bar.jsx');
var HomePage = require('./index/home.jsx');
var PhotoPage = require('./index/photo.jsx');
var MapPage = require('./index/map.jsx');
var GuestBookPage = require('./index/guest-book.jsx');
var AdminPage = require('./admin.jsx');
require('./index.less');
require('../reset.less');

var IndexPage = React.createClass({
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

var pathname = window.location.pathname;
console.log('pathname: ' + pathname); //DEBUG
if(pathname === '/') {
	ReactDOM.render(<IndexPage />, document.getElementById('root'));
} else if(pathname === '/admin')  {
	ReactDOM.render(<AdminPage />, document.getElementById('root'));
}