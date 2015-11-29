var React = require('react');
var server = require('../../util/server.js');
var util = require('util');
var LazyLoad = require('react-lazy-load').default;
var PolymerIcon = require('../../comps/polymer-icon.jsx');
require('./photo.less');

console.log('test');
console.log(LazyLoad);
console.log(PolymerIcon);
console.log('test1');

var OLD_photoUrls = [
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

var photoUrls = [
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448792935/HONG0004_dy6wvi.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793134/HONG0018_tzmcde.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793136/HONG0592_f7ywa8.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793138/HONG0701_oarncg.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793138/HONG0220_iwseih.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793139/HONG0064_pgospy.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793139/HONG0035_bd8guf.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793139/HONG0819_dumuo3.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793139/HONG0106_ljwvdo.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793139/HONG0409_i7elm2.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793140/HONG0832_jzcilh.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793140/HONG0948_vnbuo4.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793142/HONG1038_r5lbmm.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793143/HONG1244_mx3vdo.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793143/HONG1142_eorqj1.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793144/HONG1281_s9psic.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793145/HONG0975_h0hr81.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793145/HONG1313_pu5opx.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793145/HONG1360_eojbh3.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793145/HONG1400_wnfrfr.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793146/HONG1443_awdsq1.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793146/HONG1483_zjrlbu.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793147/HONG1716_o8lux3.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793147/HONG1827_lhxso1.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793147/HONG1509_skdgop.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793147/HONG1759_wi4ipx.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793147/HONG1931_nhj878.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793148/HONG1697_l8zmlg.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793148/HONG2022_nmj1ow.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793148/HONG2066_i3uiie.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793149/HONG2089_dagl92.jpg',
	'http://res.cloudinary.com/dyx4otqsu/image/upload/c_scale,w_512/v1448793148/HONG2235_ihlxks.jpg'
];




var PhotoPage = React.createClass({
	PropTypes: {
		visible: React.PropTypes.bool.isRequired
	},

	getDefaultProps() {
		return { visible: false };
	},

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.visible === false && this.props.visible === true) {
			window.scrollTo(0, 0);
			server.info.post({ data: 'photo visible true' });

			var counter = 3;
			var infoFn = function() {
				if(this.props.visible === true) {
					server.info.post({ data: util.format('photo stay %s', counter) });
					counter += 3;
					window.setTimeout(infoFn, 3000);
				}
			}.bind(this);
			window.setTimeout(infoFn, 3000);
		}
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