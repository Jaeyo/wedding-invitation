var React = require('react');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
require('./nav-bar.less');

var NavBar = React.createClass({
	PropTypes: {
		onPageChange: React.PropTypes.func.isRequired
	},

	goToHome() {
		this.props.onPageChange('home');
	},

	goToPhoto() {
		this.props.onPageChange('photo');
	},

	goToMap() {
		this.props.onPageChange('map');
	},

	goToGuestBook() {
		this.props.onPageChange('guest-book');
	},

	render() {
		return (
			<div className="nav-container">
				<span 
					className="home-icon"
					onClick={this.goToHome}>
					<PolymerIcon icon="home" size="100" />
					<label>처음으로</label>
				</span>
				<span 
					className="camera-icon"
					onClick={this.goToPhoto}>
					<PolymerIcon icon="camera" size="4" />
					<label>사진첩</label>
				</span>
				<span 
					className="map-icon"
					onClick={this.goToMap}>
					<PolymerIcon icon="map" size="4" />
					<label>오시는 길</label>
				</span>
				<span 
					className="guest-book-icon"
					onClick={this.goToGuestBook}>
					<PolymerIcon icon="guest-book" size="40" />
					<label>방명록</label>
				</span>
			</div>
		);
	}
});

module.exports = NavBar;