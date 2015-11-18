var React = require('react');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;
require('./map.less');

var MapPage = React.createClass({
	PropTypes: {
		visible: React.PropTypes.bool.isRequired
	},

	getDefaultProps() {
		return { visible: false };
	},

	render() {
		return (
			<div
				className="map-container"
				style={{ display: this.props.visible === true ? 'block' : 'none' }}>
				<div className="map">
					<GoogleMap
						containerProps={{
							style: {
								height: '100%'
							}
						}}
						defaultZoom={16}
						defaultCenter={{lat: 36.994377, lng: 127.927870}}>
						<Marker 
							key="test"
							defaultAnimation={2}
							position={{
								lat: 36.994366, 
								lng: 127.927870
							}} />
					</GoogleMap>
				</div>
			</div>
		);
	}
});

module.exports = MapPage;