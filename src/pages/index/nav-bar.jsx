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
				<div
					className="home-icon"
					onClick={this.goToHome}>
					<HomeImg />
					<label>처음으로</label>
				</div>
				<div
					className="camera-icon"
					onClick={this.goToPhoto}>
					<CameraImg />
					<label>사진첩</label>
				</div>
				<div
					className="map-icon"
					onClick={this.goToMap}>
					<MapImg />
					<label>오시는 길</label>
				</div>
				<div
					className="guest-book-icon"
					onClick={this.goToGuestBook}>
					<GuestBookImg />
					<label>방명록</label>
				</div>
			</div>
		);
	}
});
module.exports = NavBar;

var HomeImg = (props) => {
	return (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB3klEQVRYR+2X0U3DQBBEJxUAHdABUAFQAVAB0ACCCoAKQKIAQOIXESqAEqAD6AAqAL1oN9pcznbOdpQfnxQpvrNvZndn1ueRVjxGK8ZXVwJXkg4knUr6aBNMFwIPko4N9EfSfhsSbQisS3qRtJdEDIkjSe8lmSglAPibpG0DeTVASrFmc5SD7MTxFy7I1JRkCQFAAYcE41HSif1njU2rSHQmkIJ7lIeSdiVdWFYiiVubh2MnAkR5b5H+SgIUoHNJNzZPyiFFdljbSuZbE4gg3waO3aIDvLwAI0JGSuJZ0pOVaGENRJDPoPqcA5wE5ADAEfF55s8k3VnmakVIGkmtC8zFhg4ohTugym1flok0U1xTPoTPPZORuiC12bUkLIbnidwd0GT12JhiGecaViQQI0RsPEgaowibgOM6YLgj3WOGhBOINgOciKvEVkKCe6NlIUOvgATzYwgQITUnvYiNOnFDndhKSXhPmGtYEGARErCj3psLiq2UhPcK9gdnQibXirEI3W0ZY6YH5FzgTWQgMGSgKQMcRNIzII3LzwNVAu5NhBvWKyIQ1rpssE5vBHL2HQgMGegtA2P73KoTdFsR7qT2zW3Ea7np2JX7+uEtx6/uqDY9ilUdyZbxBqzd8x/drYoRbC745QAAAABJRU5ErkJggg=="/>);
};

var CameraImg = (props) => {
	return (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVRYR8WX3W1TQRCFP1cAVABUAFRAqIC4AkgFkAoSVxCQeCdPeQUqAFcAriBJASjJS16DvqsdtFj37k+w5ZGufGXvzpyZc2Z2PWPHNttxfHoAPAe+AE8qoH8Bc+CiJblWAA+Bnw3BI+YP4NUmAXwA3gGXwNuCY4FaJe0QcF/RWiqwnzk1K7Mr2XvgBLgGXtSoqAEwo3PAz4+AzltMkC8T2CIVOQDF9ToFiyB7gI+lV4Rm1WL6UowPgNO1KujjW3wXAI6Bo4JnS6nDHgsqpvYMGhFAzvFyhGMDf+2JnK0VhPTlZkWlR5sLIPhaAFaiZpbXjhB4zATLKkh10lKp6KqlAO5SxKc1xSYRqvCS6dzyrmetHuReswrffckB1Doi14lUGShaUodW5E0KoPAO0rvi/QTcAmdJlN0A/m6oDBiH1OcUWAACCQC/U9YC7wYQOrGEZlqyfBA9SgtDLzEZuwAoNIeR1qIT1ylKOfdQGuugLgCxeJXKWesSfzeoQ22qs7oAxJxQeG5ssRDsRgAEWvvbidhiG62Ak+yqQwP5ATY1wrsoyDk1M4VVsvzuMHV76gawfro56cZOxnxYTXXAvSdhPmS875lpzH2Hjf0fGdfOle4KRMnd6HR7PMHBTQLimpLdG4BOFZmt6eO7T5yGBm65tIwCcGy2bG5pw9oaKfOWPZyG8vgsnV610tUct/4eeloJIJRr9gqp6Q9Fa6SRdQpVAUvdIu4Acdr9h9/urcNozy8hZq+w5MeTbBtml0i5VA90125B2wDxj8+dA/gDY6WZcmrlpIoAAAAASUVORK5CYII="/>);
};

var MapImg = (props) => {
	return (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACCUlEQVRYR+2W4TEEQRCF30VABogAEXARIAMiQASIABGQASJwGSACROBkoL6radXbdm96t3Clyvy8nen++vWbnhtpwWu04Pz6swDLkrYkbRQFXyTdSZr2VbSvAiQ+kXTUkehC0lkfkD4AJL93VXcV+yhpTxKqVFcfgIdEcksIxGY1u5Q24b6kKxfwqbRhUn7blYT8K24PrTitQWQV8NW/FiWi4WgRsi85Y659B8CqpGcX6LhU2xYbc567DwDM9UJGge1iPos7lmTSR4g+e2dnhwDg8NsOafHCjfuGETFk58oA0Ns3F4HkQLQtkgNhqxq/uqFEQnImny16fRkIDoM3mIweppU4CxB7SzCktVaQyMZyxit5iYL0O/P66b6lqs+a0OLiBVqxXoFgSKFY6mHqagFTj/tvi2BMNu60HzaR5b2c4yyPFtC2OHcQD7QBxLFrZ+g5M4DgKGETz76TnMpJxOT0BdgeAK49RBsAU4/D9DHeYTNevO/EtPnQZkgMin+Aa4znCGDVM+/bKvDwPD5cPRZXsus/gm8Bj1VDhQhg1c+b996UNueBrZmOlxFfNFTwAFa9GakWEBB7bqvPbjGkGfhTBQ9g1afe8eQ8iNu+qGAAQ6ofwuD/M8xUMIDfqN6AGyoA4K8Uzs70fkj13rx2Y8YA8E+XAbKINQEAGj8yfxNkmn2OfwzqH+ADMMpskOuUzqUAAAAASUVORK5CYII="/>);
};

var GuestBookImg = (props) => {
	return (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKklEQVRYR+2WfU0DQRDFXxWAA3AADmgVAApAAigAFIADwAF1AA6KAsBBUQD5NfPIsN3tXRPa/kEnudxld2fmzZuPvYE2LIMN+9cWwL9k4FDSVNI79bduBs4l3QeAkaRJBgCyI0m7kobRHc/p/bKgY9Czjo8R5USS9ew8748AcCWJzf3k4COA7KQ1DD5Jugn6cHgWuhnbq6SDWPgMYARH5KVMAfAlCYd34WCWmyQAwxkgiRQgMHMiCQcPoWe2aro155wbGwD5qBkoEV9Iuo1FIgVECTjrlLSXTA0zAAwRIWwQMZHywNA4vjFAXqH4NCKnZo4jhYCCbtgEXCtyzs18ZAA2jtMsOMAYqbgOpgAKa24paiPrdUbu860UYBhGSjAAI1UGUEtbb+eeA1BMNERqx86rU2HH0J8BANBnYIiCfGu06w/teX+ZIgRcDQBrFlIEeGogt3DVeckAkVFMOEIBodhwQBFaaikgJQwcaoF6wQbnAOFuYY39X5IZIAU4a80B9oksA/DwQo9vBhPdQSCXYYvWJTWcgaEmgD5zYFEREh2OYcLDyUWMbZ6VAsA4IHJN5LStHECj+GfLa2HgTwFQUHthkSrOA6k1iLJOeXX3YoDq52qmjaj4LOz5KubtScg5Kh+dUqgFuuaxTwpAWP5Q1Cj1BUW0OKC3u8RtDZBqF/RtPxwReRZuzkXXcT5La/LMzYGuCPI+kXv4+JdrGf25s+v+Kd0C2DIwx8A3gyG6AKD7gxsAAAAASUVORK5CYII="/>);
};