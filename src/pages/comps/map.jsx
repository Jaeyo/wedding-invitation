var React = require('react');
var util = require('util');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
require('./map.less');

var MapPage = React.createClass({
	PropTypes: {
		visible: React.PropTypes.bool.isRequired
	},

	getDefaultProps() {
		return { visible: false };
	},

	getDaumMapMarkup() {
		return {
			__html: 
				'<div id="daumRoughmapContainer1448251629479" class="root_daum_roughmap root_daum_roughmap_landing"></div> \
				<script charset="UTF-8" class="daum_roughmap_loader_script" src="http://dmaps.daum.net/map_js_init/roughmapLoader.js"></script> \
				<script charset="UTF-8"> \
					alert("a"); \
					new daum.roughmap.Lander({ \
						"timestamp" : "1448251629479", \
						"key" : "6v47", \
						"mapWidth" : "320", \
						"mapHeight" : "200" \
					}).render(); \
				</script>'
		};
	},

	getNaverMapURL() {
		var params = '';
		params += 'version=1.0';
		params += '&exception=inimage';
		params += '&center=127.927813,36.994482';
		params += '&level=10';
		params += '&w=300';
		params += '&h=400';
		params += '&baselayer=default';
		params += '&key=f41a794e63f830234f725e213f2e4e3b';
		params += '&uri=localhost';
		params += '&markers=127.927813,36.994482';

		return 'http://openapi.naver.com/map/getStaticMap?' + params;
	},

	goToNaverMap() {
		window.location.href = 'http://map.naver.com/?dlevel=12&pinType=site&pinId=35585757&x=127.9279455&y=36.9945793&enc=b64';
	},

	render() {
		return (
			<div 
				className="map-container"
				style={{ display: this.props.visible === true ? 'block' : 'none' }}>
				<img 
					className="map-img" 
					src={this.getNaverMapURL()} />
				<a href="http://map.naver.com/?dlevel=12&pinType=site&pinId=35585757&x=127.9279455&y=36.9945793&enc=b64">
					네이버 지도에서 보기 
				</a>
			</div>
		);
	}
});

module.exports = MapPage;