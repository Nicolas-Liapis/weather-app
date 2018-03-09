// import preact
import { h, render, Component } from 'preact';

// import stylesheet
import style from './style.less';

export default class DoneButton extends Component {

	// rendering a function when the button is clicked
	render({clickFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}	
		return (
			<div class={style.container}>
				<button onClick={clickFunction}>
					Done
				</button>
			</div>
		);
	}
}

