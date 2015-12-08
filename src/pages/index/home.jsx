var React = require('react');
var PolymerIcon = require('../../comps/polymer-icon.jsx');
var Clearfix = require('../../comps/clearfix.jsx');
var server = require('../../util/server.js');
require('./home.less');

var HomePage = React.createClass({
	PropTypes: {
		visible: React.PropTypes.bool.isRequired,
		onPageChange: React.PropTypes.func.isRequired
	},

	getDefaultProps() {
		return { visible: false };
	},

	goToPhoto() {
		this.props.onPageChange('photo');
	},


	componentDidUpdate(prevProps, prevState) {
		if(prevProps.visible === false && this.props.visible === true)
			window.scrollTo(0, 0);
			server.trace.post({ data: 'home visible true' });
	},

	componentDidMount() {
		server.trace.post({ data: 'home mounted' });
	},

	render() {
		return (
			<div 
				className="home-container"
				style={{ display: this.props.visible === true ? 'block' : 'none' }}>
				<div className="p1">
					<div className="title">we're getting married</div>
					<div className="subtitle">재용 & 보경</div>
				</div>
				<div className="p2">
					<div className="ring-div">
						<span className="ring-icon">
							<PolymerIcon icon="marriage" size="2" />
						</span>
					</div>
					<div className="desc">
						저녁을 함께 먹던 사이에서<br />
						아침을 함께 먹는 사이가 됩니다.<br />
						두 사람, 하나되어 행복하게 살겠습니다.<br />
						감사합니다.<br />
					</div>
					<div className="pic">
						<img 
							src='https://googledrive.com/host/0B0Q0WceCbJRzbFVpUnFlNDR5UEE/HONG0018.jpg'
							onClick={this.goToPhoto} />
					</div>
					<div className="when-where">
						<div>
							<label className="label">when</label>
							<div className="when">2015. 12. 19 SAT, 13:30</div>
							<Clearfix />
						</div>
						<div>
							<label className="label">where</label>
							<div className="where">
								<div>충북 충주시 네스트웨딩홀</div>
								<span className="sub-where">(충청북도 충주시 국원대로 259 네스트웨딩홀)</span>
							</div>
							<Clearfix />
						</div>
						<div className="bus">
							<label>- 전세버스 타는 곳: </label>
							<span>신길역 광장 오전 10시</span>
						</div>
					</div>
				</div>
				<div className="p3">
					<BalloonImg />
				</div>
			</div>
		);
	}
});
module.exports = HomePage;

var BalloonImg = (props) => {
	return ( <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACiElEQVRYR62XgTEEQRBF/0WACBABIkAEiAARIAJEgAgQARkgAyJABIiAeqpb7c12z+zemaotZ2em+8/v3z29E7XHoqQjSbuS1m35oySeW/t/X9KWPbx6lnQv6UrSZ83FpOH/QNKFJEC8mGG2AGSt2BvN4/xE0k3mpwYA59fm+NhO3LVzacw8SWLtW+EERlgD0MMMRAZgRdKrOcdQSSPvHiwEOC8HjGEDUIQKEKsBSGUAoIy4hpvMKGHASRRj9u9I2rZ5DoNeemAzABgFOcIrh7ODwAhNNADnQsUGgtyUtFQujgC4g3NJZ4F1p5/T4SQbTj1OsXMaMRoBcAf/AQAtwIYD6IGOALDpQ1ILwJ5RmzHQDaMD6PnLNIB6eWAjUjgAaxpgDwAQHfEnHISWZ2q0soD4RSrH4LLFtCKD3ylndFQWtHTgRSotMB1UafxZU6uE3QJSssCpCBGhoFZkg3XdgtZbVwPgLBBDBFcOZyETK+vZ6wUpTNnWZeT1nsoG3d3hAHgXhcKraVWsLQAYd0Ncsfx2dcMQFxGDKscJmYd2wJH/ofC6pxgCgPWUXB6Uz/iym84rJX+ZX7D5d5uHweoYCgAjnk4Y7+WzvUNwsBLVjxDIGACt1IQBmpdWhZwC8p8AXJStS2pmAGxEgKRW1IS0btG5Q+AZQV737nWzDjiEutESn8+PCQF7Wr2AhyHrpHq4xgJo0dwCODcAVzqtdpTjXjkHC3EMA04vRShqRv3W4/sg6qTnEiGN5Z216fwuvwFmcg6ioQxQ56n3mbhIT8pw1sCkSTEUgF+rtQ4JgEPt/QEauqFVhsd0SDNXwlqHhFF08T2wTxzNABv8awc26A3KgTjpB7LPtVAHP8GisSGLN0ilAAAAAElFTkSuQmCC"/> );
};