// import preact
import { h, render, Component } from 'preact';

// import stylesheets
import style from './style.less';
import style_iconsSmall from './style_iconsSmall.less';


export default class WeekView extends Component {

	// render WeekView component
	render(props, state) {
		
		// define style classnames for dynamic weather condition icons
		// (could do these operations in-line, but it's easier to see and understand the process if removed from the render function in this block)
		var day1AMIcon = this.getIconStyle("am", props.day1AM);
		var day1PMIcon = this.getIconStyle("pm", props.day2AM);
		var day2AMIcon = this.getIconStyle("am", props.day2AM);
		var day2PMIcon = this.getIconStyle("pm", props.day2PM);
		var day3AMIcon = this.getIconStyle("am", props.day3AM);
		var day3PMIcon = this.getIconStyle("pm", props.day3PM);
		var day4AMIcon = this.getIconStyle("am", props.day4AM);
		var day4PMIcon = this.getIconStyle("pm", props.day4PM);
		var day5AMIcon = this.getIconStyle("am", props.day5AM);
		var day5PMIcon = this.getIconStyle("pm", props.day5PM);
		var day6AMIcon = this.getIconStyle("am", props.day6AM);
		var day6PMIcon = this.getIconStyle("pm", props.day6PM);
		var day7AMIcon = this.getIconStyle("am", props.day7AM);
		var day7PMIcon = this.getIconStyle("pm", props.day7PM);


		return (
			<div className={style.weekView}> {/* Add container */}

				{/* Add Title label and date value from props - to top of container */}
				<div class={ style.weekAheadTitle }>The Week Ahead</div>
				<div class={ style.weekCurrentDate }>{props.date}</div>
					
				{/* Add name and AM/PM commute conditions for day 1 (today) - using values from props */}
				<div class={ style.day1Title } > {props.day1} 
					<div class={ style.amConditions } >
						<div class={day1AMIcon}></div>
					</div>
					<div class={ style.pmConditions } >
						<div class={day1PMIcon}></div>
					</div>
				</div>

				{/* Add name and AM/PM commute conditions for day 2 (tomorrow) - using values from props */}
				<div class={ style.day2OnwardsTitle } > {props.day2} 
					<div class={ style.amConditions } >
						<div class={day2AMIcon}></div>
					</div>
					<div class={ style.pmConditions } >
						<div class={day2PMIcon}></div>
					</div>
				</div>

				{/* Add name and AM/PM commute conditions for day 3 - using values from props */}
				<div class={ style.day2OnwardsTitle } > {props.day3}  
					<div class={ style.amConditions } >
						<div class={day3AMIcon}></div>
					</div>
					<div class={ style.pmConditions } >
						<div class={day3PMIcon}></div>
					</div>
				</div>

				{/* Add name and AM/PM commute conditions for day 4 - using values from props */}
				<div class={ style.day2OnwardsTitle } > {props.day4}  
					<div class={ style.amConditions } >
						<div class={day4AMIcon}></div>
					</div>
					<div class={ style.pmConditions } >
						<div class={day4PMIcon}></div>
					</div>
				</div>

				{/* Add name and AM/PM commute conditions for day 5 - using values from props */}
				<div class={ style.day2OnwardsTitle } > {props.day5}  
					<div class={ style.amConditions } >
						<div class={day5AMIcon}></div>
					</div>
					<div class={ style.pmConditions } >
						<div class={day5PMIcon}></div>
					</div>
				</div>

				{/* Add name and AM/PM commute conditions for day 6 - using values from props */}
				<div class={ style.day2OnwardsTitle } > {props.day6}  
					<div class={ style.amConditions } >
						<div class={day6AMIcon}></div>
					</div>
					<div class={ style.pmConditions } >
						<div class={day6PMIcon}></div>
					</div>
				</div>

				{/* Add name and AM/PM commute conditions for day 7 - using values from props */}
				<div class={ style.day2OnwardsTitle } > {props.day7}  
					<div class={ style.amConditions } >
						<div class={day7AMIcon}></div>
					</div>
					<div class={ style.pmConditions } >
						<div class={day7PMIcon}></div>
					</div>
				</div>
			
			</div>
		);
	}

	// Function: determine the appropriate CSS style (background-image) for the weather conditions obtained from the API
	getIconStyle = (timePeriod, conditions) => {
		switch (conditions) {

			case "sunny" :
			case "clear" :
			case "mostlysunny" :
			case "partlysunny" : 
				return (timePeriod == "am") ? style_iconsSmall.clear : style_iconsSmall.nt_clear ;
				break;

			case "mostlycloudy" :
			case "partlycloudy" :
			case "unknown" :
				return (timePeriod == "am") ? style_iconsSmall.partlyCloudy : style_iconsSmall.nt_partlyCloudy;
				break;

			case "cloudy" :
			case "fog" :
			case "hazy" :
				return (timePeriod == "am") ? style_iconsSmall.cloudy : style_iconsSmall.nt_cloudy;
				break;

			case "chancerain" :
			case "chancesleet" :
			case "chanceflurries" :
			case "chancetstorms" : 
				return (timePeriod == "am") ? style_iconsSmall.chanceRain : style_iconsSmall.nt_chanceRain;
				break;

			case "rain" :
			case "chancesnow" :
			case "tstorms" :
			case "sleet" :
			case "flurries" : 
			case "snow" : 
				return (timePeriod == "am") ? style_iconsSmall.rain : style_iconsSmall.nt_rain;
				break;
		}
	}
	
}
