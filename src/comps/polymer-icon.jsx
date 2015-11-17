var React = require('react');
var util = require('util');

var PolymerIcon = React.createClass({
	//http://dmfrancisco.github.io/react-icons/
	propTypes: {
		icon: React.PropTypes.string.isRequired,
		size: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number
		]),
		style: React.PropTypes.object
	},
	getDefaultProps() {
		return { size: 24 };
	},
	_mergeStyle(...args) {
		return Object.assign({}, ...args);
	},
	renderGraphic() {
		switch(this.props.icon) {
		case 'my-icon':
			return (<g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" /></g>);
		case 'another-icon':
			return (<g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" /></g>);
		case 'config':
			return (<g><path d="M18.622,8.371l-0.545-1.295c0,0,1.268-2.861,1.156-2.971l-1.679-1.639c-0.116-0.113-2.978,1.193-2.978,1.193l-1.32-0.533
		c0,0-1.166-2.9-1.326-2.9H9.561c-0.165,0-1.244,2.906-1.244,2.906L6.999,3.667c0,0-2.922-1.242-3.034-1.131L2.289,4.177
		C2.173,4.29,3.507,7.093,3.507,7.093L2.962,8.386c0,0-2.962,1.141-2.962,1.295v2.322c0,0.162,2.969,1.219,2.969,1.219l0.545,1.291
		c0,0-1.268,2.859-1.157,2.969l1.678,1.643c0.114,0.111,2.977-1.195,2.977-1.195l1.321,0.535c0,0,1.166,2.898,1.327,2.898h2.369
		c0.164,0,1.244-2.906,1.244-2.906l1.322-0.535c0,0,2.916,1.242,3.029,1.133l1.678-1.641c0.117-0.115-1.22-2.916-1.22-2.916
		l0.544-1.293c0,0,2.963-1.143,2.963-1.299v-2.32C21.59,9.425,18.622,8.371,18.622,8.371z M14.256,10.794
		c0,1.867-1.553,3.387-3.461,3.387c-1.906,0-3.461-1.52-3.461-3.387s1.555-3.385,3.461-3.385
		C12.704,7.41,14.256,8.927,14.256,10.794z"/></g>);
		case 'marriage': 
			return (<g><path d="M173.684,493.875c39.216,0,75.324-13.225,104.423-35.229c29.108,22.014,65.206,35.229,104.422,35.229
		c95.778,0,173.685-77.905,173.685-173.674c0-95.778-77.906-173.684-173.685-173.684c-39.216,0-75.323,13.225-104.422,35.228
		c-29.108-22.013-65.207-35.228-104.423-35.228C77.906,146.518,0,224.423,0,320.201C0,415.96,77.906,493.875,173.684,493.875z
		 M278.106,250.022c13.53,20.062,21.438,44.217,21.438,70.179s-7.908,50.117-21.438,70.179
		c-13.531-20.062-21.439-44.217-21.439-70.179S264.585,270.084,278.106,250.022z M382.538,194.33
		c69.405,0,125.871,56.466,125.871,125.871c0,69.404-56.466,125.861-125.871,125.861c-26.029,0-50.241-7.946-70.332-21.534
		c21.965-29.09,35.161-65.149,35.161-104.327s-13.196-75.248-35.161-104.336C332.297,202.276,356.509,194.33,382.538,194.33z
		 M173.684,194.33c26.029,0,50.241,7.946,70.332,21.535c-21.965,29.089-35.161,65.159-35.161,104.336s13.196,75.237,35.161,104.327
		c-20.091,13.588-44.303,21.534-70.332,21.534c-69.404,0-125.871-56.457-125.871-125.861
		C47.812,250.796,104.279,194.33,173.684,194.33z"/>
		<path d="M274.75,77.868h-0.191c0,0-26.431-28.946-49.496-7.803c-23.065,21.143-2.888,69.854,49.496,90.997l0.191,0.182
		c52.374-21.143,72.56-70.036,49.495-91.178C301.181,48.922,274.75,77.868,274.75,77.868z"/></g>);
		case 'balloon': 
			return (<g><path d="M482.151,266.63c-0.19,0.913-0.245,1.713-0.454,2.653c-0.336,1.413-0.954,2.912-1.354,4.348
		c-0.863,3.062-1.763,6.101-2.744,9.095c-0.881,2.38-1.699,4.766-2.689,7.201c-5.987,15.637-13.956,30.183-23.642,43.494
		c-38.396,58.354-101.017,118.467-132.835,147.46c-19.435,17.953-39.615,0.817-40.496,0.036
		c-32.519-28.947-96.411-89.532-134.871-150.894c-10.049-14.393-18.081-30.27-23.828-47.251c-0.459-1.29-0.977-2.626-1.408-3.916
		c-1.522-4.884-2.762-9.881-3.889-14.915c-0.223-1.049-0.65-2.149-0.827-3.18c-0.009-0.063-0.009-0.123-0.036-0.19
		c-2.53-12.371-3.907-25.182-3.907-38.32c0-104.52,84.722-189.232,189.228-189.232c104.515,0,189.196,84.699,189.196,189.232
		C487.585,237.578,485.613,252.388,482.151,266.63L482.151,266.63z M523.102,224.717C523.102,100.613,422.512,0,298.417,0
		C174.29,0,73.696,100.604,73.696,224.717c-0.623,29.447,5.452,57.096,16.205,83.531c0.609,1.531,1.1,3.057,1.74,4.547
		c2.562,5.96,5.456,11.83,8.495,17.645c0.264,0.485,0.459,0.99,0.727,1.49c33.832,64.15,95.057,121.491,159.04,179.205h-0.009
		c0,0,7.923,6.705,0,21.57l-22.106,41.522c-0.246,0.472-9.359,19.961,8.268,22.532h112.81c6.951-1.163,17.699-5.36,8.687-20.843
		c0,0,0-0.018-0.055-0.018l-26.467-45.412c0,0-7.551-12.029-0.037-18.426c20.162-17.009,51.817-44.03,63.502-55.569
		c42.049-43.176,86.615-99.399,107.095-159.525c1.354-4.884,2.608-9.618,3.68-14.12c3.644-13.733,6.061-27.943,7.069-42.576
		C523.238,230.404,523.102,224.717,523.102,224.717L523.102,224.717z"/>
		<path d="M315.198,82.832c-20.025-5.274-41.513-6.074-63.119-1.1c-71.229,16.423-115.668,87.497-99.245,158.717
		c0.895,3.871,2.094,7.546,3.284,11.23c2.131,4.289,6.615,10.494,14.392,8.532c11.539-2.903,14.71-9.536,14.674-19.317
		c0-0.136,0.055-0.195,0.063-0.313c-2.353-62.215,39.583-119.343,102.494-133.849c7.868-1.812,15.718-2.844,23.496-3.216v-0.009
		c0,0,0.109,0.009,0.2,0.018c0.218-0.009,0.472-0.009,0.672-0.018c2.035-0.068,7.051-1.072,8.014-9.054
		C320.995,88.229,318.36,84.076,315.198,82.832L315.198,82.832z"/></g>);
		}
	},
	render() {
		var styles = {
			fill: 'currentcolor',
			verticalAlign: 'middle',
			overflow: 'visible',
			width: this.props.size,
			height: this.props.size
		};

		return (
			<svg 
				viewBox="0 0 24 24"
				preserveAspectRatio="xMidYMid meet"
				fit 
				style={this._mergeStyle(
					styles,
					this.props.style
				)}>
				{this.renderGraphic()}
			</svg>
		);
	}
});

module.exports = PolymerIcon;