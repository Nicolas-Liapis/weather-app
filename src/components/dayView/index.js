// import preact
import { h, render, Component } from 'preact';

// import components
import SectionButton from './sectionButton';
import Accessories from './accessories';

// import styles from local .less sheets
import style from './style.less';
import style_backgrounds from './style_backgrounds.less';
import style_iconsSmall from './style_iconsSmall.less';
import style_iconsLarge from './style_iconsLarge.less';


export default class DayView extends Component {

	// Initialise Day View component
	constructor(props){
		super(props);

		// initialise variable classNames with default values
		this.state.amSectionClassName = style.amSection;
		this.state.pmSectionClassName = style.pmSection;
		this.state.headerDayClassName = style.headerDayDark;
		this.state.headerDateClassName = style.headerDateDark;
		this.state.amOverlayClassName = style.amOverlayOff;
		this.state.pmOverlayClassName = style.pmOverlayOff;
		this.state.amIndicatorArrowClassName = style.amIndicatorArrowDown;
		this.state.pmIndicatorArrowClassName = style.pmIndicatorArrowUp;

		// initialise flags for current layout states
		this.state.amShowing  = false;
		this.state.pmShowing  = false;

		// console.log(props.amTomorrowLabel)
	}

	// render Day View component
	render(props, state) { 

		// get correct String 12-hour clock values 
		var amHour1String = this.getHourString(props.amTime1)
		var amHour2String = this.getHourString(props.amTime2)
		var amHour3String = this.getHourString(props.amTime3)
		var pmHour1String = this.getHourString(props.pmTime1)
		var pmHour2String = this.getHourString(props.pmTime2)
		var pmHour3String = this.getHourString(props.pmTime3)

		// define style classnames for dynamic weather condition icons
		var amHour1Icon = this.getIconStyle("small", props.amTime1, props.amIcon1);
		var amHour2Icon = this.getIconStyle("small", props.amTime2, props.amIcon2);
		var amHour3Icon = this.getIconStyle("small", props.amTime3, props.amIcon3);
		var pmHour1Icon = this.getIconStyle("small", props.pmTime1, props.pmIcon1);
		var pmHour2Icon = this.getIconStyle("small", props.pmTime2, props.pmIcon2);
		var pmHour3Icon = this.getIconStyle("small", props.pmTime3, props.pmIcon3);

		var amSummaryIcon = this.getIconStyle("large", 10, props.amConditions);
		var pmSummaryIcon = this.getIconStyle("large", 18, props.pmConditions);

		var	amBackgroundImage = this.getBackgroundImage("am", props.amConditions); 
		var	pmBackgroundImage = this.getBackgroundImage("pm", props.pmConditions);  

		var amTomorrowLabelClassName = (props.amTomorrowLabel) ? style.amTomorrowLabelOn : style.amTomorrowLabelOff;
		var pmTomorrowLabelClassName = (props.pmTomorrowLabel) ? style.pmTomorrowLabelOn : style.pmTomorrowLabelOff;

		
		return (
			<div class={style.dayView}> {/*  add view container */}

				{/* add day/date elements to top of container - using values from props */}
				<div class={ style.currentDate }> 
					<div className={ this.state.headerDayClassName }>{props.day}
						<div class={ this.state.headerDateClassName }>{props.date}</div>
					</div>
				</div>

				{/* add 3-hour data breakdown for pm commute - using data values from props */}
				<div class={ style.pmDetails }>

					{/* add data for pm hour 1 */}
					<div class={ style.cell1 }>
						<div class={ style.cellTime}>{pmHour1String}</div>
						<div class={style_iconsSmall.iconContainer}>
							<div class={ pmHour1Icon }></div>
						</div>
						<div class={ style.cellPrecipitationIcon}>
							<div class={ style.cellPrecipitation }>{props.pmPop1 + '%'}</div>
						</div>
						<div class={ style.cellWindIcon}></div>
						<div class={ style.cellWind}>{props.pmWind1}</div>
						<div class={ style.cellTemperatureIcon}></div>
						<div class={ style.cellTemperature}>{props.pmTemp1 + '˚c'}</div>
					</div>

					{/* add dividing line for formatting */}
					<div class={ style.dividerLine1 }></div>

					{/* add data for pm hour 2 */}
					<div class={ style.cell2 }>
						<div class={ style.cellTime}>{pmHour2String}</div>
						<div class={style_iconsSmall.iconContainer}>
							<div class={ pmHour2Icon }></div>
						</div>
						<div class={ style.cellPrecipitationIcon }>
							<div class={ style.cellPrecipitation}>{props.pmPop2 + '%'}</div>
						</div>
						<div class={ style.cellWindIcon}></div>
						<div class={ style.cellWind}>{props.pmWind2}</div>
						<div class={ style.cellTemperatureIcon}></div>
						<div class={ style.cellTemperature}>{props.pmTemp2 + '˚c'}</div>
					</div>

					{/* add dividing line for formatting */}
					<div class={ style.dividerLine2 }></div>

					{/* add data for pm hour 3 */}
					<div class={ style.cell3 }>
						<div class={ style.cellTime}>{pmHour3String}</div>
						<div class={style_iconsSmall.iconContainer}>
							<div class={ pmHour3Icon }></div>
						</div>
						<div class={ style.cellPrecipitationIcon }>
							<div class={ style.cellPrecipitation}>{props.pmPop3 + '%'}</div>
						</div>
						<div class={ style.cellWindIcon}></div>
						<div class={ style.cellWind}>{props.pmWind3}</div>
						<div class={ style.cellTemperatureIcon}></div>
						<div class={ style.cellTemperature}>{props.pmTemp3 + '˚c'}</div>
					</div>

				</div>

				{/* add 3-hour data breakdown for am commute - using data values from props */}
				<div class={ style.amDetails }>

					{/* add data for am hour 3 */}
					<div class={ style.cell1 }>
						<div class={ style.cellTime}> {amHour1String} </div>
						<div class={style_iconsSmall.iconContainer}>
							<div class={ amHour1Icon }></div>
						</div>
						<div class={ style.cellPrecipitationIcon }>
							<div class={ style.cellPrecipitation}>{props.amPop1 + '%'}</div>
						</div>
						<div class={ style.cellWindIcon}></div>
						<div class={ style.cellWind}>{props.amWind1}</div>
						<div class={ style.cellTemperatureIcon}></div>
						<div class={ style.cellTemperature}>{props.amTemp1 + '˚c'}</div>
					</div>
					
					{/* add dividing line for formatting */}
					<div class={ style.dividerLine1 }></div>
					
					{/* add data for am hour 3 */}
					<div class={ style.cell2 }>
						<div class={ style.cellTime}> {amHour2String} </div>
						<div class={style_iconsSmall.iconContainer}>
							<div class={ amHour2Icon }></div>
						</div>
						<div class={ style.cellPrecipitationIcon }>
							<div class={ style.cellPrecipitation}>{props.amPop2 + '%'}</div>
						</div>
						<div class={ style.cellWindIcon}></div>
						<div class={ style.cellWind}>{props.amWind2}</div>
						<div class={ style.cellTemperatureIcon}></div>
						<div class={ style.cellTemperature}>{props.amTemp2 + '˚c'}</div>
					</div>
					
					{/* add dividing line for formatting */}
					<div class={ style.dividerLine2 }></div>
					
					{/* add data for am hour 3 */}
					<div class={ style.cell3 }>
						<div class={ style.cellTime}> {amHour3String} </div>
						<div class={style_iconsSmall.iconContainer}>
							<div class={ amHour3Icon }></div>
						</div>
						<div class={ style.cellPrecipitationIcon }>
							<div class={ style.cellPrecipitation}>{props.amPop3 + '%'}</div>
						</div>
						<div class={ style.cellWindIcon}></div>
						<div class={ style.cellWind}>{props.amWind3}</div>
						<div class={ style.cellTemperatureIcon}></div>
						<div class={ style.cellTemperature}>{props.amTemp3 + '˚c'}</div>
					</div>

				</div>

				{/* add AM summary section to top half of screen */}
				<div className={this.state.amSectionClassName}> 

					<div class={amBackgroundImage}></div>

					{/* add accessories component - passing in conditional data values to props */}
					<div class={style.amAccessories}>
						<Accessories umbrellaOn={props.amUmbrellaOn} coatOn={props.amCoatOn} sunglassesOn={props.amSunglassesOn} />
					</div>

					{/* add commute summary Temperature using data value from props */}
					<div class={ style.amTemperature }>{ this.props.amTemperature + ' ˚c' }</div>

					{/* add commute summary Weather Conditions icon using data value from props */}
					<div class={style.amConditions} >
						<div class={amSummaryIcon}></div>
					</div>

					{/* Add location label to conditions summary */}
					<div class={style.amLocation}>{props.amLocation}</div>

					{/* add 'am' section label and up/down layout indicator to bottom of AM section */}
					<div class={style.amSplitBar}>
						<div class={style.amLabel}>am</div>
						<div class={ this.state.amIndicatorArrowClassName }></div>
					</div>

					{/* Add label to indicate if summary is for tomorrow's commute */}
					<div class={amTomorrowLabelClassName}>Tomorrow</div>

					{/* add overlay with gradient to AM section - default opacity style set to zero */}
					<div className={ this.state.amOverlayClassName }></div>

					{/* add dividing line for formatting */}
					<div class={ style.amSplitLine}></div>

					{/* add invisible button on top of AM section - to trigger animation of PM section to show AM commute hourly breakdown */}
					<div class={style.amButton}>
						<SectionButton clickFunction={ this.toggleAmDetails } />
					</div>

				</div>

				{/* add PM summary section to bottom half of screen */}
				<div className={this.state.pmSectionClassName}> 

					<div class={pmBackgroundImage}></div>
				
					{/* add accessories component - passing in conditional data values to props */}
					<div class={style.pmAccessories}>
						<Accessories umbrellaOn={props.pmUmbrellaOn} coatOn={props.pmCoatOn} sunglassesOn={props.pmSunglassesOn} />
					</div>

					{/* add dividing line for formatting */}
					<div class={ style.pmSplitLine}></div>
					
					{/* add 'pm' section label and up/down layout indicator to top of PM section */}
					<div class={style.pmSplitBar}>
						<div class={style.pmLabel}>pm</div>
						<div className={ this.state.pmIndicatorArrowClassName }></div>
					</div>

					{/* Add location label to conditions summary */}
					<div class={style.pmLocation}>{props.pmLocation}</div>

					{/* add commute summary Weather Conditions icon using data value from props */}
					<div class={ style.pmConditions }>
						<div class={pmSummaryIcon}></div>
					</div>

					{/* add commute summary Temperature using data value from props */}
					<div class={ style.pmTemperature }>{ props.pmTemperature + ' ˚c' }</div>

					{/* Add label to indicate if summary is for tomorrow's commute */}
					<div class={pmTomorrowLabelClassName}>Tomorrow</div>
								
					{/* add overlay with gradient to PM section - default opacity style set to zero */}
					<div className={ this.state.pmOverlayClassName }></div>

					{/* add invisible button on top of PM section - to trigger animation of AM section to show PM commute hourly breakdown */}
					<div class={style.pmButton}>
						<SectionButton clickFunction={ this.togglePmDetails } />
					</div>

				</div>

			</div>
		);
	}


	// Function: show/hide hourly breakdown of AM weather details
	toggleAmDetails = () => {
		if (this.state.pmShowing == true) return ;
		if (this.state.pmSectionClassName == style.pmSection) {
			this.setState({pmSectionClassName: style.pmSectionShow});
			this.setState({pmOverlayClassName: style.pmOverlayOn});
			this.setState({amIndicatorArrowClassName: style.amIndicatorArrowUp});
			this.setState({amShowing: true});
		} else {
			this.setState({pmSectionClassName: style.pmSection});
			this.setState({pmOverlayClassName: style.pmOverlayOff});
			this.setState({amIndicatorArrowClassName: style.amIndicatorArrowDown});
			this.setState({amShowing: false});
		}
	}

	// Function: show/hide hourly breakdown of PM weather details
	togglePmDetails = () => {
		if (this.state.amShowing == true) return ;

		if (this.state.amSectionClassName == style.amSection) {
			this.setState({amSectionClassName: style.amSectionShow});
			this.setState({amOverlayClassName: style.amOverlayOn});
			this.setState({headerDayClassName: style.headerDayLight});
			this.setState({headerDateClassName: style.headerDateLight});
			this.setState({pmIndicatorArrowClassName: style.pmIndicatorArrowDown});
			this.setState({pmShowing: true});
		} else {
			this.setState({amSectionClassName: style.amSection});
			this.setState({amOverlayClassName: style.amOverlayOff});
			this.setState({headerDayClassName: style.headerDayDark});
			this.setState({headerDateClassName: style.headerDateDark});
			this.setState({pmIndicatorArrowClassName: style.pmIndicatorArrowUp});
			this.setState({pmShowing: false});
		}
	}

	// get correct String 12-hour clock values 
	getHourString = (hour) => {

		var hourString;
		if (parseInt(hour) < 12) {
			hourString = hour + "am";
		} else if (parseInt(hour) == 12) {
			hourString = hour + "pm";
		} else {
			hourString = (hour-12) + "pm";
		}
		
		return hourString; 
	}

		// Function: determine the appropriate CSS style (background-image) for the weather conditions obtained from the API
	getIconStyle = (size, hour, conditions) => {
		switch (conditions) {

			case "sunny" :
			case "clear" :
			case "mostlysunny" :
				if (size == "small") {
					return (hour > 5 && hour < 18) ? style_iconsSmall.clear : style_iconsSmall.nt_clear ;
				} else {
					return (hour > 5 && hour < 18) ? style_iconsLarge.clear : style_iconsLarge.nt_clear ;
				}
				break;

			case "mostlycloudy" :
			case "partlycloudy" :
			case "partlysunny" : 
			case "unknown" :
				if (size == "small") {
					return (hour > 5 && hour < 18) ? style_iconsSmall.partlyCloudy : style_iconsSmall.nt_partlyCloudy;
				} else {
					return (hour > 5 && hour < 18) ? style_iconsLarge.partlyCloudy : style_iconsLarge.nt_partlyCloudy;
				}
				break;

			case "cloudy" :
			case "fog" :
			case "hazy" :
				if (size == "small") {
					return (hour > 5 && hour < 18) ? style_iconsSmall.cloudy : style_iconsSmall.nt_cloudy;
				} else {
					return (hour > 5 && hour < 18) ? style_iconsLarge.cloudy : style_iconsLarge.nt_cloudy;
				}
				break;

			case "chancerain" :
			case "chancesleet" :
			case "chanceflurries" :
			case "chancetstorms" : 
				if (size == "small") {
					return (hour > 5 && hour < 18) ? style_iconsSmall.chanceRain : style_iconsSmall.nt_chanceRain;	
				} else {
					return (hour > 5 && hour < 18) ? style_iconsLarge.chanceRain : style_iconsLarge.nt_chanceRain;
				}
				break;

			case "rain" :
			case "chancesnow" :
			case "tstorms" :
			case "sleet" :
			case "flurries" : 
			case "snow" : 
				if (size == "small") {
					return (hour > 5 && hour < 18) ? style_iconsSmall.rain : style_iconsSmall.nt_rain;	
				} else {
					return (hour > 5 && hour < 18) ? style_iconsLarge.rain : style_iconsLarge.nt_rain;	
				}
				break;
		}
	}


	getBackgroundImage = (timePeriod, conditions) => {
		switch (conditions) {
			case "sunny" :
			case "clear" :
			case "mostlysunny" :
				return (timePeriod == "am") ? style_backgrounds.amClear : style_backgrounds.pmClear ;
				break;

			case "cloudy" :
			case "fog" :
			case "hazy" :
				return (timePeriod == "am") ? style_backgrounds.amCloudy : style_backgrounds.pmCloudy ;
				break;

			case "mostlycloudy" :
			case "partlycloudy" :
			case "partlysunny" : 
			case "unknown" :
				return (timePeriod == "am") ? style_backgrounds.amMostlyCloudy : style_backgrounds.pmMostlyCloudy ;
				break;

			case "chancerain" :
			case "chancesleet" :
			case "chanceflurries" :
			case "chancetstorms" : 
				return (timePeriod == "am") ? style_backgrounds.amChanceRain : style_backgrounds.pmChanceRain ;
				break;

			case "rain" :
			case "chancesnow" :
			case "tstorms" :
			case "sleet" :
			case "flurries" : 
			case "snow" : 
				return (timePeriod == "am") ? style_backgrounds.amRain : style_backgrounds.pmRain ;
				break;
		}
	}

	
	
}
