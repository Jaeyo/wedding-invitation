var React = require('react');
var ReactDOM = require('react-dom');
var PolymerIcon = require('../comps/polymer-icon.jsx');
var NavBar = require('./index/nav-bar.jsx');
var HomePage = require('./index/home.jsx');
var PhotoPage = require('./index/photo.jsx');
var MapPage = require('./index/map.jsx');
var GuestBookPage = require('./index/guest-book.jsx');
var AdminPage = require('./admin.jsx');
var Button = require('material-ui/lib/raised-button');
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
			<div style={{ position: 'relative' }}>
				<HomePage visible={this.state.page === 'home'} onPageChange={this.onPageChange} />
				<NavBar onPageChange={this.onPageChange} />
				<PhotoPage visible={this.state.page === 'photo'} />
				<MapPage visible={this.state.page === 'map'} />
				<GuestBookPage visible={this.state.page === 'guest-book'} />
				<Button 
					style={{
						position: 'fixed',
						right: 0,
						bottom: 0,
						zIndex: 9999,
						minWidth: '50px',
						height: '24px'
					}}
					labelStyle={{
						fontSize: '10px',
						lineHeight: '24px'
					}}
					onClick={ function() { window.scrollTo(0, 0); } }
					label="top" />
			</div>
		);

		
	}
});

var pathname = window.location.pathname;
if(pathname === '/') {
	ReactDOM.render(<IndexPage />, document.getElementById('root'));
} else if(pathname === '/admin')  {
	ReactDOM.render(<AdminPage />, document.getElementById('root'));
}