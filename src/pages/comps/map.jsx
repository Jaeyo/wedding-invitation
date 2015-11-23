var React = require('react');
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
				'<div id="daumRoughmapContainer1448251629479" className="root_daum_roughmap root_daum_roughmap_landing"></div> \
				<script charset="UTF-8" class="daum_roughmap_loader_script" src="http://dmaps.daum.net/map_js_init/roughmapLoader.js"></script> \
				<script charset="UTF-8"> \
					new daum.roughmap.Lander({ \
						"timestamp" : "1448251629479", \
						"key" : "6v47", \
						"mapWidth" : "320", \
						"mapHeight" : "200" \
					}).render(); \
				</script>'
		};
	},

	render() {
		return (
			<div className="map-container"
				style={{ display: this.props.visible === true ? 'block' : 'none' }}
				dangerouslySetInnerHTML={this.getDaumMapMarkup()} />
		);
	}
});

module.exports = MapPage;