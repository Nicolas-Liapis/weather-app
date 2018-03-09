// import preact
import { h, render, Component } from 'preact';

// import stylesheets for ipad & button
import style from './style';
import styleAM from './styleAM';
import stylePM from './stylePM';
import styleIcons from './styleIcons';
import style_iphone from '../button/style_iphone';
import styleWeek from './styleWeek';
import styleDetails from './styleDetails';
import styleWeatherSmall from './styleWeatherSmall';
import styleSettings from './styleSettings';

// import jquery for API calls
import $ from 'jquery';

import Clock from '../clock';

import Button from '../button';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		// button display state
		this.setState({ display: true });


	}

	showAmDetails = () => {
		console.log("show AM details");
	}

	showPmDetails = () => {
		console.log("show PM details");
	}

	// a call to fetch weather data via wunderground
	// componentDidMount
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/5d95b7c03397aca9/conditions/q/UK/London.json";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}



	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		
		// display all weather data
		
		return (

			<div class={ style.iphoneContainer }>

				<div class={ style.navBar }>
						<div class={ style.statusBar }></div>
						<div class={ style.appTitle }>Weather App
							<div class={ style.buttonUser }></div>
						</div>
						<div class={style.clock}><Clock /></div>
				</div>


				<div class= { style.containerCenter }> 

					<div class={ styleAM.currentDate }>
						<div class={ styleAM.amHeaderDay }>Thursday</div>
						<div class={ styleAM.amHeaderDate }>15th February 2018</div>
					</div>


					<div class={ stylePM.pmDetails }>
						<div class={ styleDetails.cell1 }>
							<div class={ styleDetails.cellTime}>4pm</div>
							<div class={ styleWeatherSmall.iconLightRainNight }></div>
							<div class={ styleDetails.cellPrecipitationIcon}></div>
							<div class={ styleDetails.cellPrecipitation}>60%</div>
							<div class={ styleDetails.cellWindIcon}></div>
							<div class={ styleDetails.cellWind}>3</div>
							<div class={ styleDetails.cellTemperatureIcon}></div>
							<div class={ styleDetails.cellTemperature}>9˚C</div>
						</div>
						<div class={ styleDetails.dividerLine1 }></div>
						<div class={ styleDetails.cell2 }>
							<div class={ styleDetails.cellTime}>5pm</div>
							<div class={ styleWeatherSmall.iconHeavyRainNight }></div>
							<div class={ styleDetails.cellPrecipitationIcon}></div>
							<div class={ styleDetails.cellPrecipitation}>90%</div>
							<div class={ styleDetails.cellWindIcon}></div>
							<div class={ styleDetails.cellWind}>4</div>
							<div class={ styleDetails.cellTemperatureIcon}></div>
							<div class={ styleDetails.cellTemperature}>7˚C</div>
						</div>
						<div class={ styleDetails.dividerLine2 }></div>
						<div class={ styleDetails.cell3 }>
							<div class={ styleDetails.cellTime}>6pm</div>
							<div class={ styleWeatherSmall.iconHeavyRainNight }></div>
							<div class={ styleDetails.cellPrecipitationIcon}></div>
							<div class={ styleDetails.cellPrecipitation}>90%</div>
							<div class={ styleDetails.cellWindIcon}></div>
							<div class={ styleDetails.cellWind}>4</div>
							<div class={ styleDetails.cellTemperatureIcon}></div>
							<div class={ styleDetails.cellTemperature}>6˚C</div>
						</div>
					</div>

					<div class={ styleAM.amDetails }>
						<div class={ styleDetails.cell1 }>
							<div class={ styleDetails.cellTime}>9am</div>
							<div class={ styleWeatherSmall.iconLightCloudDay }></div>
							<div class={ styleDetails.cellPrecipitationIcon}></div>
							<div class={ styleDetails.cellPrecipitation}>0%</div>
							<div class={ styleDetails.cellWindIcon}></div>
							<div class={ styleDetails.cellWind}>5</div>
							<div class={ styleDetails.cellTemperatureIcon}></div>
							<div class={ styleDetails.cellTemperature}>7˚C</div>
						</div>
						<div class={ styleDetails.dividerLine1 }></div>
						<div class={ styleDetails.cell2 }>
							<div class={ styleDetails.cellTime}>10am</div>
							<div class={ styleWeatherSmall.iconLightCloudDay }></div>
							<div class={ styleDetails.cellPrecipitationIcon}></div>
							<div class={ styleDetails.cellPrecipitation}>0%</div>
							<div class={ styleDetails.cellWindIcon}></div>
							<div class={ styleDetails.cellWind}>6</div>
							<div class={ styleDetails.cellTemperatureIcon}></div>
							<div class={ styleDetails.cellTemperature}>8˚C</div>
						</div>
						<div class={ styleDetails.dividerLine2 }></div>
						<div class={ styleDetails.cell3 }>
							<div class={ styleDetails.cellTime}>11am</div>
							<div class={ styleWeatherSmall.iconLightCloudDay }></div>
							<div class={ styleDetails.cellPrecipitationIcon}></div>
							<div class={ styleDetails.cellPrecipitation}>10%</div>
							<div class={ styleDetails.cellWindIcon}></div>
							<div class={ styleDetails.cellWind}>6</div>
							<div class={ styleDetails.cellTemperatureIcon}></div>
							<div class={ styleDetails.cellTemperature}>8˚C</div>
						</div>
					</div>


					<div class={ styleAM.amSectionShow }>
			
						<div class={ styleAM.amSnapshot }>
							
							<div class={ styleAM.amAccessoriesBG }>
								<div class={ styleIcons.iconLeft }>
									<div class={ styleIcons.umbrellaDark }></div>
								</div>
								<div class={ styleIcons.iconCentre }>
									<div class={ styleIcons.coatDark }></div>
								</div>
								<div class={ styleIcons.iconRight }>
									<div class={ styleIcons.sunglassesLight }></div>			
								</div>
							</div>

							<div class={ styleAM.temperatureAM }>{ this.state.temp }</div>
							
							<div class={ styleAM.conditionsAM }></div>

							<div class={styleAM.amSplitBar}>
								<div class={styleAM.amLabel}>am</div>
								<div class={styleAM.amArrowDown}></div>
							</div>

						</div>
						
						<div class={ styleAM.overlayOn }></div>
						<div class={ styleAM.splitLine}></div>
						 
						<div class= { style_iphone.container }> 
							<Button class={ style_iphone.button } clickFunction={ this.showAmDetails } / >
						</div>

					</div>


					<div class={ stylePM.pmSectionHide }>
			
						<div class={ stylePM.pmSnapshot }>
						
							<div class={stylePM.pmSplitBar}>
								<div class={stylePM.pmLabel}>pm</div>
								<div class={stylePM.pmArrowUp}></div>
							</div>

							<div class={ stylePM.conditionsPM }></div>

							<div class={ stylePM.temperaturePM }>{ this.state.temp }</div>

							<div class={ stylePM.pmAccessoriesBG }>
								<div class={ styleIcons.iconLeft }>
									<div class={ styleIcons.umbrellaDark }></div>
								</div>
								<div class={ styleIcons.iconCentre }>
									<div class={ styleIcons.coatDark }></div>
								</div>
								<div class={ styleIcons.iconRight }>
									<div class={ styleIcons.sunglassesLight }></div>			
								</div>
							</div>

						</div>

						<div class={ stylePM.overlayOff }></div>
						<div class={ stylePM.splitLine}></div>

						<div class={style.swipeNavIndicatorLeft}></div>

						<div class= { style_iphone.container }> 
							<Button class={ style_iphone.buttonPM } clickFunction={ this.showPmDetails }/ >
						</div>

					</div>

				</div>

				<div class= { style.containerRight }> 
					<div class={ styleWeek.weekSection }>

						<div class={ styleWeek.weekAheadTitle }>The Week Ahead</div>
						<div class={ styleWeek.weekCurrentDate }>15th February 2018</div>

						<div class={ styleWeek.day1 } > Monday </div>
						<div class={ styleWeek.amLightCloud } ></div>
						<div class={ styleWeek.pmHeavyRain } ></div>

						<div class={ styleWeek.day2 } > Tuesday </div>
						<div class={ styleWeek.amLightCloud } ></div>
						<div class={ styleWeek.pmCloudy } ></div>

						<div class={ styleWeek.day3 } > Wednesday </div>
						<div class={ styleWeek.amCloudy } ></div>
						<div class={ styleWeek.pmLightRain } ></div>

						<div class={ styleWeek.day4 } > Thursday </div>
						<div class={ styleWeek.amHeavyRain } ></div>
						<div class={ styleWeek.pmHeavyRain } ></div>

						<div class={ styleWeek.day5 } > Friday </div>
						<div class={ styleWeek.amCloudy } ></div>
						<div class={ styleWeek.pmLightCloud } ></div>

						<div class={ styleWeek.day6 } > Saturday </div>
						<div class={ styleWeek.amHeavyRain } ></div>
						<div class={ styleWeek.pmClear } ></div>

						<div class={ styleWeek.day7 } > Sunday </div>
						<div class={ styleWeek.amClear } ></div>
						<div class={ styleWeek.pmClear } ></div>

						<div class={style.swipeNavIndicatorRight}></div>
						
					</div>
				</div>


				<div class= { style.containerLeft }> 
					<div class= { styleSettings.settingsSection }> 
						
						<div class={ styleSettings.homeAddressLabel }>Home Address</div>
						<input class={styleSettings.homeField } type="text" name="home" />

						<div class={ styleSettings.workAddressLabel }>Work Address</div>
						<input class={styleSettings.workField } type="text" name="work" />
					
						<div class={ styleSettings.dividerLine1 }></div>

						<div class={ styleSettings.amJourney }>
							<div class={ styleSettings.journeyTitle } >AM Journey</div>
							<div class={ styleSettings.startTime }> 
								<div class={ styleSettings.startTitle }>Starts</div>
								<div class={ styleSettings.timeSelector }>
									<input class={ styleSettings.hours } dir="rtl" type="number" name="amStartHours" placeholder="00" min="0" max="11" />
									:
									<input class={ styleSettings.minutes } type="number" name="amStartMinutes" placeholder="00" step="10" min="0" max="50" />
								</div>
							</div>
							<div class={ styleSettings.endTime }> 
								<div class={ styleSettings.endTitle }>Ends</div>
								<div class={ styleSettings.timeSelector }>
									<input class={ styleSettings.hours } dir="rtl" type="number" name="amEndHours" placeholder="00" min="0" max="12" />
									:
									<input class={ styleSettings.minutes } type="number" name="amEndMinutes" placeholder="00" step="10" min="0" max="50" />
								</div>
							</div>

							
						</div>

						<div class={ styleSettings.pmJourney }>
							<div class={ styleSettings.journeyTitle } >PM Journey</div>
							<div class={ styleSettings.startTime }> 
								<div class={ styleSettings.startTitle }>Starts</div>
								<div class={ styleSettings.timeSelector }>
									<input class={ styleSettings.hours } dir="rtl" type="number" name="pmStartHours" placeholder="00" min="0" max="11" />
									:
									<input class={ styleSettings.minutes } type="number" name="pmStartMinutes" placeholder="00" step="10" min="0" max="50" />
								</div>
							</div>
							<div class={ styleSettings.endTime }> 
								<div class={ styleSettings.endTitle }>Ends</div>
								<div class={ styleSettings.timeSelector }>
									<input class={ styleSettings.hours } dir="rtl" type="number" name="pmEndHours" placeholder="00" min="0" max="12" />
									:
									<input class={ styleSettings.minutes } type="number" name="pmEndMinutes" placeholder="00" step="10" min="0" max="50" />
								</div>
							</div>
						</div>

						<div class={ styleSettings.dividerLine2 }></div>

						<div class={ styleSettings.doneButton }>Done</div>

					</div>
				</div>


			</div>
		);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		//var conditions = parsed_json['current_observation']['weather'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
		//	cond : conditions

		// { this.state.cond }  -- removed fromstyle.conditions div

		});      
	}
}