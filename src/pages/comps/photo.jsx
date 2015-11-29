var React = require('react');
var LazyLoad = require('react-lazy-load').default;
var PolymerIcon = require('../../comps/polymer-icon.jsx');
require('./photo.less');

console.log('test');
console.log(LazyLoad);
console.log(PolymerIcon);
console.log('test1');

var photoUrls = [
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0004.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0018.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0035.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0064.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0106.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0220.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0409.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0592.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0701.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0819.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0832.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0948.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0975.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1038.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1142.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1244.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1281.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1313.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1360.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1400.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1443.jpg',
	'https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG1483.jpg'
];

var PhotoPage = React.createClass({
	PropTypes: {
		visible: React.PropTypes.bool.isRequired
	},

	getDefaultProps() {
		return { visible: false };
	},

	render() {
		return (
			<div
				className="photo-container"
				style={{ display: this.props.visible === true ? 'block' : 'none'}}>
				{
					photoUrls.map(function(url) {
						return ( 
							<LazyLoad threshold={400} key={url}>
								<img className="photo" src={url} /> 
							</LazyLoad>
						);
					})
				}
			</div>
		);
	}
});

module.exports = PhotoPage;