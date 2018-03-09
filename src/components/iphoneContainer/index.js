// import preact
import { h, render, Component } from 'preact';

// import stylesheet
import style from './style';

// import jquery for API calls
import $ from 'jquery';

// import components
import NavBar from '../navBar';
import DayView from '../dayView';
import WeekView from '../weekView';
import SettingsView from '../settingsView';
import SwipeButton from './swipeButton';
import SettingsButton from './settingsButton';

export default class Iphone_Container extends Component {

	// a constructor with initial set states
	constructor(props){
		super(props);

		this.state.loadingScreenClassName = style.loadingScreenOn;

		// initialise default nav bar title
		this.state.navBarTitle = "LdnWthr";

		// initialise default classnames for dynamic divs
		this.state.dayViewClassName = style.dayViewCentre;
		this.state.weekViewClassName = style.weekViewRight;
		this.state.navIndicatorClassName = style.navIndicatorLeft;
		this.state.settingsViewClassName = style.settingsViewOff;
		this.state.settingsButtonClassName = style.settingsButtonOn;
		this.state.settingsBackTextClassName = style.settingsBackTextOff;
		this.state.settingsBackButtonClassName = style.settingsBackButtonOff;
		this.state.buttonLeftClassName = style.buttonLeftOff;
		this.state.arrowLeftClassName = style.arrowLeftOff;
		this.state.buttonRightClassName = style.buttonRightOn;
		this.state.arrowRightClassName = style.arrowRightOn;
		this.state.amTomorrowLabel = false;
		this.state.pmTomorrowLabel = false;
	}

	// fetch data once component is mounted
	componentDidMount() {
		this.fetchUserData();
		this.fetchWeatherData();
	}


	// the main render method for the iphone container component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		// const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;


		// display all weather data
		return (
			<div class={ style.container }>

					{/*  add NavBar (title-bar) to top of iphone screen container */}
				< NavBar navBarTitle={this.state.navBarTitle} />

					{/* add Day View container with props values from API parsed response */}
				<div className={this.state.dayViewClassName}>
					< DayView day={this.state.today} date={this.state.date} amTomorrowLabel={this.state.amTomorrowLabel} pmTomorrowLabel={this.state.pmTomorrowLabel} amLocation={this.state.home} amTemperature={this.state.amTemperature} amConditions={this.state.amConditions} amUmbrellaOn={this.state.amUmbrellaOn} amCoatOn={this.state.amCoatOn} amSunglassesOn={this.state.amSunglassesOn} amTime1={this.state.amTime1} amIcon1={this.state.amIcon1} amPop1={this.state.amPop1} amWind1={this.state.amWind1} amTemp1={this.state.amTemp1} amTime2={this.state.amTime2} amIcon2={this.state.amIcon2} amPop2={this.state.amPop2} amWind2={this.state.amWind2} amTemp2={this.state.amTemp2} amTime3={this.state.amTime3} amIcon3={this.state.amIcon3} amPop3={this.state.amPop3} amWind3={this.state.amWind3} amTemp3={this.state.amTemp3}  pmLocation={this.state.work} pmTemperature={this.state.pmTemperature} pmConditions={this.state.pmConditions} pmUmbrellaOn={this.state.pmUmbrellaOn} pmCoatOn={this.state.pmCoatOn} pmSunglassesOn={this.state.pmSunglassesOff} pmTime1={this.state.pmTime1} pmIcon1={this.state.pmIcon1} pmPop1={this.state.pmPop1} pmWind1={this.state.pmWind1} pmTemp1={this.state.pmTemp1} pmTime2={this.state.pmTime2} pmIcon2={this.state.pmIcon2} pmPop2={this.state.pmPop2} pmWind2={this.state.pmWind2} pmTemp2={this.state.pmTemp2} pmTime3={this.state.pmTime3} pmIcon3={this.state.pmIcon3} pmPop3={this.state.pmPop3} pmWind3={this.state.pmWind3} pmTemp3={this.state.pmTemp3} pmTime2={this.state.pmTime2} pmPop2={this.state.pmPop2} pmWind2={this.state.pmWind2} pmTemp2={this.state.pmTemp2} />
				</div>

					{/* add Week View container with props values from API parsed response (default CSS style positions it off screen right) */}
				<div className={this.state.weekViewClassName}>
					< WeekView date={this.state.date} day1={this.state.day1} day1AM={this.state.day1AM} day1PM={this.state.day1PM} day2={this.state.day2} day2AM={this.state.day2AM} day2PM={this.state.day2PM} day3={this.state.day3} day3AM={this.state.day3AM} day3PM={this.state.day3PM} day4={this.state.day4} day4AM={this.state.day4AM} day4PM={this.state.day4PM} day5={this.state.day5} day5AM={this.state.day5AM} day5PM={this.state.day5PM} day6={this.state.day6} day6AM={this.state.day6AM} day6PM={this.state.day6PM} day7={this.state.day7} day7AM={this.state.day7AM} day7PM={this.state.day7PM} />
				</div>

					{/* add navigation indicator symbols at bottom of screen - to signify more content to left/right of screen */}
				<div className={this.state.navIndicatorClassName}></div>

					{/* add container to show settings page with props values from saved user data (default CSS style has zero opactiy) */}
				<div className={this.state.settingsViewClassName}>
					< SettingsView home={this.state.home} work={this.state.work} amStartHours={this.state.amStartHours} amStartMins={this.state.amStartMins} amEndHours={this.state.amEndHours} amEndMins={this.state.amEndMins} pmStartHours={this.state.pmStartHours} pmStartMins={this.state.pmStartMins} pmEndHours={this.state.pmEndHours} pmEndMins={this.state.pmEndMins} / >
				</div>

					{/* add 'Back' button to toggle-off opacity of Setting View container (Default CSS style has opacity set to zero) */}
				<div className={this.state.settingsBackButtonClassName}>
					< SettingsButton clickFunction={this.toggleSettingsView} / >
				</div>
				<div className={this.state.settingsBackTextClassName}>Back</div>

					{/* add 'user-symbol' button to toggle-on opacity of Setting View container */}
				<div className={this.state.settingsButtonClassName}>
					< SettingsButton clickFunction={this.toggleSettingsView} / >
				</div>

					{/* add screen-left button to transition to Day View */}
				<div class={this.state.buttonLeftClassName}>
					< SwipeButton clickFunction={ this.swipeRight } / >
				</div>
				<div class={this.state.arrowLeftClassName}></div>

					{/* add screen-right button to transition to Week View (default CSS style has zero opacity) */}
				<div class={this.state.buttonRightClassName}>
					< SwipeButton clickFunction={ this.swipeLeft }/ >
				</div>
				<div class={this.state.arrowRightClassName}></div>

					{/* add masks for overflow conents (off sides of iphone screen) */}
				<div class={style.maskLeft}></div>
				<div class={style.maskRight}></div>
				<div class={style.maskBottom}></div>

				<div class={this.state.loadingScreenClassName}>
					<div class={style.loadingLabel}>Loading...</div>
				</div>
			</div>
		);
	}

	// ----- Data retrieval functions -----

	// Function: gets saved user data - home/work destinations and journey times
	fetchUserData = () => {

		// user data currently hard-coded. Would be good to be loading this from a cache instead - so that we can use the settings page to update the cache values.
		this.setState({
			home : localStorage.inputHome,
			work : localStorage.inputWork,
			amStartHours : localStorage.amHoursStart,
			amStartMins : localStorage.amMinsStart,
			amEndHours : localStorage.amHoursEnd,
			amEndMins : localStorage.amMinsEnd,
			pmStartHours : localStorage.pmHoursStart,
			pmStartMins : localStorage.pmMinsStart,
			pmEndHours : localStorage.pmHoursEnd,
			pmEndMins : localStorage.pmMinsEnd,
		})

	}

	// Function: gets weather data from API, using user data
	fetchWeatherData = (home, work) => {

		var homeLocation = this.state.home;
		var workLocation = this.state.work;
		console.log(homeLocation);
		console.log(workLocation);

		// API call for home address
		var url = "http://api.wunderground.com/api/5d95b7c03397aca9/hourly10day/q/UK/"+homeLocation+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseAMResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})

		// API call for work address
		var url = "http://api.wunderground.com/api/5d95b7c03397aca9/hourly10day/q/UK/"+workLocation+".json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parsePMResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

	// catch response from Home Address API call and parse data
	parseAMResponse = (parsed_json) => {
		 this.parseResponse(parsed_json, true)
	}

	// catch response from Work Address API call and parse data
	parsePMResponse = (parsed_json) => {
		this.parseResponse(parsed_json, false)
	}

	// extract data from each API response
	parseResponse = (parsed_json, isAMData) => {

		// Filter response to get only the required forecast objects for commuting hours 

		var startHour = (isAMData) ? parseInt(this.state.amStartHours) : parseInt(this.state.pmStartHours);

		var allHours = parsed_json.hourly_forecast;

		var firstHourObject = this.getFirstHourObject(allHours);

		var todayYearDay = parseInt(firstHourObject['FCTTIME'].yday);
		var todayDate = parseInt(firstHourObject['FCTTIME'].mday);

		// Determine if commuting hours have passed (commute start hour + 2) - if so retrieve forecast objects for tomorrow
		if (startHour < parseInt(firstHourObject['FCTTIME'].hour)) {
			if ((startHour + 2) >= parseInt(firstHourObject['FCTTIME'].hour)) {
				startHour = parseInt(firstHourObject['FCTTIME'].hour);
			} else {
				todayYearDay += 1;
				if (isAMData) {
					this.setState({amTomorrowLabel : true})
				} else {
					this.setState({pmTomorrowLabel : true})
				}
			}
		}

		// get forecast objects
		var hour1Forecast = this.getHourObject(allHours, startHour, todayYearDay);
		var hour2Forecast = this.getHourObject(allHours, startHour + 1, todayYearDay);
		var hour3Forecast = this.getHourObject(allHours, startHour + 2, todayYearDay);

		// find most severe weather conditions and temperature from retrieved forecast objects
		var severeTemperature = this.getSevereTemperature(hour1Forecast, hour2Forecast, hour3Forecast);
		var severeConditions = this.getSevereConditions(hour1Forecast, hour2Forecast, hour3Forecast);

		// determine whether user should be advised to bring each type of accessory
		var umbrellaOn = this.testUmbrella(hour1Forecast, hour2Forecast, hour3Forecast);
		var coatOn = this.testCoat(severeTemperature);
		var sunglassesOn = this.testSunglasses(hour1Forecast, hour2Forecast, hour3Forecast);

		todayYearDay = parseInt(firstHourObject['FCTTIME'].yday); // reset current year-day

		// get forecast objects for commute start hours - for next 7 days
		var day1StartHourForecast = this.getHourObject(allHours, startHour, todayYearDay + 1);
		var day2StartHourForecast = this.getHourObject(allHours, startHour, todayYearDay + 2);
		var day3StartHourForecast = this.getHourObject(allHours, startHour, todayYearDay + 3);
		var day4StartHourForecast = this.getHourObject(allHours, startHour, todayYearDay + 4);
		var day5StartHourForecast = this.getHourObject(allHours, startHour, todayYearDay + 5);
		var day6StartHourForecast = this.getHourObject(allHours, startHour, todayYearDay + 6);
		var day7StartHourForecast = this.getHourObject(allHours, startHour, todayYearDay + 7);

		// set state properties, based on whether the parsed data is from the home or work address API calls
		if (isAMData) {
			this.setState({
				today : firstHourObject['FCTTIME'].weekday_name,
				date : (todayDate + " " + firstHourObject['FCTTIME'].month_name + " " + firstHourObject['FCTTIME'].year),

				amTemperature : severeTemperature,
				amConditions : severeConditions,

				amUmbrellaOn : umbrellaOn,
				amCoatOn : coatOn,
				amSunglassesOn : sunglassesOn,

				amTime1 : hour1Forecast['FCTTIME'].hour,
				amIcon1 : hour1Forecast.icon,
				amPop1 : hour1Forecast.pop,
				amWind1 : hour1Forecast.wspd['english'],
				amTemp1 : hour1Forecast.temp['metric'],

				amTime2 : hour2Forecast['FCTTIME'].hour,
				amIcon2 : hour2Forecast.icon,
				amPop2 : hour2Forecast.pop,
				amWind2 : hour2Forecast.wspd['english'],
				amTemp2 : hour2Forecast.temp['metric'],

				amTime3 : hour3Forecast['FCTTIME'].hour,
				amIcon3 : hour3Forecast.icon,
				amPop3 : hour3Forecast.pop,
				amWind3 : hour3Forecast.wspd['english'],
				amTemp3 : hour2Forecast.temp['metric'],

				day1 : day1StartHourForecast['FCTTIME'].weekday_name,
				day1AM : day1StartHourForecast.icon,

				day2 : day2StartHourForecast['FCTTIME'].weekday_name,
				day2AM : day2StartHourForecast.icon,

				day3 : day3StartHourForecast['FCTTIME'].weekday_name,
				day3AM : day3StartHourForecast.icon,

				day4 : day4StartHourForecast['FCTTIME'].weekday_name,
				day4AM : day4StartHourForecast.icon,

				day5 : day5StartHourForecast['FCTTIME'].weekday_name,
				day5AM : day5StartHourForecast.icon,

				day6 : day6StartHourForecast['FCTTIME'].weekday_name,
				day6AM : day6StartHourForecast.icon,

				day7 : day7StartHourForecast['FCTTIME'].weekday_name,
				day7AM : day7StartHourForecast.icon,
			})
		} else {
			this.setState({

				pmTemperature : severeTemperature,
				pmConditions : severeConditions,

				pmUmbrellaOn : umbrellaOn,
				pmCoatOn : coatOn,
				pmSunglassesOn : sunglassesOn,

				pmTime1 : hour1Forecast['FCTTIME'].hour,
				pmIcon1 : hour1Forecast.icon,
				pmPop1 : hour1Forecast.pop,
				pmWind1 : hour1Forecast.wspd['english'],
				pmTemp1 : hour1Forecast.temp['metric'],

				pmTime2 : hour2Forecast['FCTTIME'].hour,
				pmIcon2 : hour2Forecast.icon,
				pmPop2 : hour2Forecast.pop,
				pmWind2 : hour2Forecast.wspd['english'],
				pmTemp2 : hour2Forecast.temp['metric'],

				pmTime3 : hour3Forecast['FCTTIME'].hour,
				pmIcon3 : hour3Forecast.icon,
				pmPop3 : hour3Forecast.pop,
				pmWind3 : hour3Forecast.wspd['english'],
				pmTemp3 : hour2Forecast.temp['metric'],

				day2PM : day2StartHourForecast.icon,
				day3PM : day3StartHourForecast.icon,
				day4PM : day4StartHourForecast.icon,
				day5PM : day5StartHourForecast.icon,
				day6PM : day6StartHourForecast.icon,
				day7PM : day7StartHourForecast.icon,

				loadingScreenClassName : style.loadingScreenOff

			})
		}
	}

	// retreive first Hour forecast object from allHours object
	getFirstHourObject = (allHours) => {
		for (var hour in allHours) {
			if (allHours.hasOwnProperty(hour)) {
				var hourObject = allHours[hour];
				if (hour == 0) {
					return hourObject;
				}
			}
		}
	}

	// retreive specified Hour forecast object from allHours object
	getHourObject = (allHours, hourNumber, dayNumber) => {
		for (var hour in allHours) {
			if (allHours.hasOwnProperty(hour)) {
				var hourObject = allHours[hour];
				 if (hourObject.FCTTIME["hour"] == hourNumber && hourObject.FCTTIME["yday"] == dayNumber) {
					return hourObject;
				}
			}
		}
	}


	// ----- Data Analysis funtions -----

	getSevereTemperature = (hour1, hour2, hour3) => {

		var hour1Temp = parseInt(hour1.temp['metric']);
		var hour2Temp = parseInt(hour2.temp['metric']);
		var hour3Temp = parseInt(hour3.temp['metric']);

		var severestTemperature;
		if (hour1Temp > 10 ) {
			if (hour1Temp > hour2Temp && hour1Temp >= hour3Temp) {
				 severestTemperature = hour1Temp;
			} else if (hour2Temp > hour1Temp && hour2Temp >= hour3Temp) {
				 severestTemperature = hour2Temp;
			} else if (hour3Temp > hour1Temp && hour3Temp >= hour2Temp) {
				 severestTemperature = hour3Temp;
			} else if (hour1Temp === hour2Temp || hour1Temp === hour3Temp) {
				 severestTemperature = hour1Temp;
			}
		} else if (hour1Temp < 10) {
			if (hour1Temp < hour2Temp && hour1Temp <= hour3Temp) {
				 severestTemperature = hour1Temp;
			} else if (hour2Temp < hour1Temp && hour2Temp <= hour3Temp) {
				 severestTemperature = hour2Temp;
			} else if (hour3Temp < hour1Temp && hour3Temp <= hour2Temp) {
				 severestTemperature = hour3Temp;
			} else if (hour1Temp === hour2Temp || hour1Temp === hour3Temp) {
				 severestTemperature = hour1Temp;
			}
		}


		return severestTemperature;
	}

	getSevereConditions = (hour1, hour2, hour3) => {
		var hour1Conditions = hour1.icon;
		var hour2Conditions = hour2.icon;
		var hour3Conditions = hour3.icon;


		var severestConditions = hour1Conditions;

		// Add logic to determine most severe conditions here...
		//severest condition hierachy
			//tstorms
				if (hour1Conditions == "tstorms") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "tstorms") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "tstorms") {severestConditions = hour3Conditions}
			//chancetstorms
				else if (hour1Conditions == "chancetstorms") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "chancetstorms") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "chancetstorms") {severestConditions = hour3Conditions}
			//snow
				else if (hour1Conditions == "snow") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "snow") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "snow") {severestConditions = hour3Conditions}
			//chancesnow
				else if (hour1Conditions == "chancesnow") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "chancesnow") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "chancesnow") {severestConditions = hour3Conditions}
			// sleet
				else if (hour1Conditions == "sleet") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "sleet") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "sleet") {severestConditions = hour3Conditions}
			//chancesleet
				else if (hour1Conditions == "chancesleet") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "chancesleet") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "chancesleet") {severestConditions = hour3Conditions}
			//rain
				else if (hour1Conditions == "rain") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "rain") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "rain") {severestConditions = hour3Conditions}
			//chancerain
				else if (hour1Conditions == "chancerain") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "chancerain") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "chancerain") {severestConditions = hour3Conditions}
			//flurries
				else if (hour1Conditions == "flurries") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "flurries") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "flurries") {severestConditions = hour3Conditions}
			//chanceflurries
				else if (hour1Conditions == "chanceflurries") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "chanceflurries") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "chanceflurries") {severestConditions = hour3Conditions}
			//unknown
				else if (hour1Conditions == "unknown") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "unknown") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "unknown") {severestConditions = hour3Conditions}
			//fog
				else if (hour1Conditions == "fog") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "fog") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "fog") {severestConditions = hour3Conditions}
			// cloudy
				else if (hour1Conditions == "cloudy") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "cloudy") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "cloudy") {severestConditions = hour3Conditions}
			// mostlycloudy
				else if (hour1Conditions == "mostlycloudy") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "mostlycloudy") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "mostlycloudy") {severestConditions = hour3Conditions}
			// partlycloudy
				else if (hour1Conditions == "partlycloudy") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "partlycloudy") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "partlycloudy") {severestConditions = hour3Conditions}
			// hazy
				else if (hour1Conditions == "hazy") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "hazy") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "hazy") {severestConditions = hour3Conditions}
			// clear
				else if (hour1Conditions == "clear") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "clear") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "clear") {severestConditions = hour3Conditions}
			// mostlysunny
				else if (hour1Conditions == "mostlysunny") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "mostlysunny") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "mostlysunny") {severestConditions = hour3Conditions}
			// sunny
				else if (hour1Conditions == "sunny") {severestConditions = hour1Conditions}
				else if (hour2Conditions == "sunny") {severestConditions = hour2Conditions}
				else if (hour3Conditions == "sunny") {severestConditions = hour3Conditions}

		return severestConditions;
	}


	testUmbrella = (hour1, hour2, hour3) => {
		var hour1Rain = parseInt(hour1.pop);
		var hour2Rain = parseInt(hour2.pop);
		var hour3Rain = parseInt(hour3.pop);

		var shouldTakeUmbrella;

		if (hour1Rain > 20 || hour2Rain > 20 || hour3Rain > 20) {
			shouldTakeUmbrella = true;
		} else {
			shouldTakeUmbrella = false;
		}

		// Add logic to decide whether to take an umbrella...

		return shouldTakeUmbrella;
	}

	testCoat = (temperature) => {
		var shouldTakeCoat;

		if ( temperature < 9) {
			shouldTakeCoat = true;
		} else {
			shouldTakeCoat = false;
		}

		return shouldTakeCoat;
	}

	testSunglasses = (hour1, hour2, hour3) => {

		// var hour1Temp = parseInt(hour1.temp['metric']);
		// var hour2Temp = parseInt(hour2.temp['metric']);
		// var hour3Temp = parseInt(hour3.temp['metric']);

		var shouldTakeSunglasses = false;

		// if (hour1Temp > 25 || hour2Temp > 25 || hour3Temp > 25) {
		// 	shouldTakeSunglasses = true;
		// } else {
		// 	shouldTakeSunglasses = false;
		// }

		if (hour1.icon == "sunny" || hour1.icon == "clear" || hour2.icon == "sunny" || hour2.icon == "clear" || hour3.icon == "sunny" || hour3.icon == "clear") {
			shouldTakeSunglasses = true;
		}
		return shouldTakeSunglasses;
	}



	// ----- Navigation functions -----

	// Function: transition to Week View container (triggered by swipe-left gesture or screen-right navigation button)
	swipeLeft = () => {
		// move Day View container off screen-left, move Week View container to centre from screen-right
		this.setState({dayViewClassName: style.dayViewLeft});
		this.setState({weekViewClassName: style.weekViewCentre});
		this.setState({navIndicatorClassName: style.navIndicatorRight});
		this.setState({buttonRightClassName: style.buttonRightOff});
		this.setState({arrowRightClassName: style.arrowRightOff});
		this.setState({buttonLeftClassName: style.buttonLeftOn});
		this.setState({arrowLeftClassName: style.arrowLeftOn});
	}

	// Function: transition to Day View container (triggered by swipe-right gesture or screen-left navigation button)
	swipeRight = () => {
		// move Week View container off screen-right, move Day View container to centre from screen-left
		this.setState({dayViewClassName: style.dayViewCentre});
		this.setState({weekViewClassName: style.weekViewRight});
		this.setState({navIndicatorClassName: style.navIndicatorLeft});
		this.setState({buttonLeftClassName: style.buttonLeftOff});
		this.setState({arrowLeftClassName: style.arrowLeftOff});
		this.setState({buttonRightClassName: style.buttonRightOn});
		this.setState({arrowRightClassName: style.arrowRightOn});
	}

	// Function: show / hide Settings View container - triggered from the user-symbol button oin the NavBar
	toggleSettingsView = () => {
		if (this.state.settingsViewClassName == style.settingsViewOff) {
			// show Settings View, change navBar title, show the 'Back' button and hide the user-symbol button
			this.setState({navBarTitle : "Settings"});
			this.setState({settingsViewClassName: style.settingsViewOn});
			this.setState({settingsButtonClassName: style.settingsButtonOff});
			this.setState({settingsBackTextClassName: style.settingsBackTextOn});
			this.setState({settingsBackButtonClassName: style.settingsBackButtonOn});
		} else {
			// hide Settings View, navBar title, hide the 'Back' button and show the user-symbol button
			this.setState({navBarTitle : "LdnWthr"});
			this.setState({settingsViewClassName: style.settingsViewOff});
			this.setState({settingsButtonClassName: style.settingsButtonOn});
			this.setState({settingsBackTextClassName: style.settingsBackTextOff});
			this.setState({settingsBackButtonClassName: style.settingsBackButtonOff});
		}
	}


}
