// import preact
import { h, Component } from 'preact';

// import required Components from 'components/'
import Iphone_Container from './iphoneContainer';


export default class App extends Component {
//var App = React.createClass({

	// once the components are loaded, checks if the url bar has a path with "ipad" in it, if so sets state of tablet to be true
	componentDidMount() {
		if (localStorage.getItem("inputHome") === null) {
			localStorage.inputHome = "London";
			localStorage.inputWork = "London";
			localStorage.amHoursStart = 8;
			localStorage.amMinsStart = 0;
			localStorage.amHoursEnd = 9;
			localStorage.amMinsEnd = 0;
			localStorage.pmHoursStart = 17;
			localStorage.pmMinsStart = 0;
			localStorage.pmHoursEnd = 18;
			localStorage.pmMinsEnd = 0;
		}
	}

	/*
		A render method to display the required Component on screen (iPhone or iPad) : selected by checking component's isTablet state
	*/
	render(){

		return (
			<div id="app">
				<Iphone_Container/ >
			</div>
		);

	}
}