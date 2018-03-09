// import preact
import { h, render, Component } from 'preact';

// import stylesheet
import style from './style.less';

// import components
import Clock from './clock';
	
export default class NavBar extends Component {

	// render NavBar component
	render(props, state) {
		return (

			<div class={style.navBar}> {/* Add container */}

				{/* Add iPhone 'status bar' (not needed for final build - just used here to mirror the design images) */}
				<div class={style.statusBar}></div>

				{/* Add Clock component */}
				<Clock />

				{/* Add NavBar title - using value from props (default is 'Weather App', changes to 'Settings' upon navigation to that view) */}	
				<div class={style.appTitle}>{props.navBarTitle}</div>

			</div>
		);
	}
	
}