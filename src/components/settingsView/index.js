// import preact
import { h, render, Component } from 'preact';

// import stylesheet
import style from './style.less';

//import components
import DoneButton from './doneButton';

export default class SettingsView extends Component {

	// render SettingsView component
	render(props, state) {

		// modify saved form values to show correct 24-hour clock representation ('04' instead of '4' etc) - form inputs parsed to Int when saving to storage in 'acceptChanges' function.
		var homeValue = props.home;
		var workValue = props.work;
		var amStartHoursValue = (props.amStartHours > 9) ? props.amStartHours : '0' + props.amStartHours ;
		var amStartMinsValue = (props.amStartMins > 9) ? props.amStartMins : '0' + props.amStartMins;
		var amEndHoursValue = (props.amEndHours > 9) ? props.amEndHours : '0' + props.amEndHours;
		var amEndMinsValue = (props.amEndMins > 9) ? props.amEndMins : '0' + props.amEndMins;
		var pmStartHoursValue = (props.pmStartHours > 9) ? props.pmStartHours : '0' + props.pmStartHours;
		var pmStartMinsValue = (props.pmStartMins > 9) ? props.pmStartMins : '0' + props.pmStartMins;
		var pmEndHoursValue = (props.pmEndHours > 9) ? props.pmEndHours : '0' + props.pmEndHours;
		var pmEndMinsValue = (props.pmEndMins > 9) ? props.pmEndMins : '0' + props.pmEndMins;

		return (
			<div class={style.settingsView}> {/* Add container */}

				{/* Add Home Address - Form text field input and label to top of container */}
				<div class={ style.homeAddressLabel }>Home Address</div>
				<select id="inputHome" class={style.homeField } type="text" name="home" value={homeValue}>
					<option>City Of London</option>
					<option>Camden</option>
					<option>Chelsea</option>
					<option>Edgware</option>
					<option>Enfield</option>
					<option>Heathrow</option>
					<option>Holborn</option>
					<option>Ilford</option>
					<option>Shoreditch</option>
					<option>Southwark</option>
					<option>Wembley</option>
					<option>Westminster</option>
				</select>

				{/* Add Work Address - Form text field input and label to top of container */}
				<div class={ style.workAddressLabel }>Work Address</div>
				<select id="inputWork" class={style.workField } type="text" name="work" value={workValue}>
					<option>City Of London</option>
					<option>Camden</option>
					<option>Chelsea</option>
					<option>Edgware</option>
					<option>Enfield</option>
					<option>Heathrow</option>
					<option>Holborn</option>
					<option>Ilford</option>
					<option>Shoreditch</option>
					<option>Southwark</option>
					<option>Wembley</option>
					<option>Westminster</option>
				</select>

				{/* Add divider line for formatting */}
				<div class={ style.dividerLine1 }></div>

				{/* Add form inputs for AM commute time details - with placeholder values taken from props */}
				<div class={ style.amJourney }>

					{/* AM coomute start - section */}
					<div class={ style.journeyTitle } >AM Journey</div> {/* section title */}
					<div class={ style.startTime }>
						<div class={ style.startTitle }>Starts</div>
						<div class={ style.timeSelector }>
							<input id="amHoursStart" class={ style.hours } dir="rtl" type="number" name="amStartHours" value={amStartHoursValue} min="0" max="23" />
							:
							<input id="amMinsStart" class={ style.minutes } type="number" name="amStartMinutes" value={amStartMinsValue} step="15" min="0" max="45" />
						</div>
					</div>

					{/* AM coomute end - section */}
					<div class={ style.endTime }>
						<div class={ style.endTitle }>Ends</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input id="amHoursEnd" class={ style.hours } dir="rtl" type="number" name="amEndHours" value={amEndHoursValue} min="0" max="23" />
							:
							<input id="amMinsEnd" class={ style.minutes } type="number" name="amEndMinutes" value={amEndMinsValue} step="15" min="0" max="45" />
						</div>
					</div>
				</div>

				{/* Add form inputs for PM commute time details - with placeholder values taken from props */}
				<div class={ style.pmJourney }>

					{/* PM coomute start - section */}
					<div class={ style.journeyTitle } >PM Journey</div>
					<div class={ style.startTime }>
						<div class={ style.startTitle }>Starts</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input id="pmHoursStart" class={ style.hours } dir="rtl" type="number" name="pmStartHours" value={pmStartHoursValue} min="0" max="23" />
							:
							<input id="pmMinsStart" class={ style.minutes } type="number" name="pmStartMinutes" value={pmStartMinsValue} step="15" min="0" max="45" />
						</div>
					</div>

					{/* PM coomute end - section */}
					<div class={ style.endTime }>
						<div class={ style.endTitle }>Ends</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input id="pmHoursEnd" class={ style.hours } dir="rtl" type="number" name="pmEndHours" value={pmEndHoursValue} min="0" max="23" />
							:
							<input id="pmMinsEnd" class={ style.minutes } type="number" name="pmEndMinutes" value={pmEndMinsValue} step="15" min="0" max="45" />
						</div>
					</div>
				</div>

				{/* Add divider line for formatting */}
				<div class={ style.dividerLine2 }></div>

				{/* Add button to submit form */}
				< DoneButton clickFunction={this.acceptChanges} / >

			</div>
		);
	}


	// Function: save changes for home / work destinations and commute times
	acceptChanges = () => {

		//Get Home and Work destinations from form inputs
		let inputHome = document.getElementById('inputHome').value;
		let inputWork = document.getElementById('inputWork').value;
		
		//Get start and end times for AM journey from form inuts
		let amHoursStart = parseInt(document.getElementById('amHoursStart').value);
		let amMinsStart = parseInt(document.getElementById('amMinsStart').value);
		let amHoursEnd = parseInt(document.getElementById('amHoursEnd').value);
		let amMinsEnd = parseInt(document.getElementById('amMinsEnd').value);

		//Get start and end times for PM journey from form inuts
		let pmHoursStart = parseInt(document.getElementById('pmHoursStart').value);
		let pmMinsStart = parseInt(document.getElementById('pmMinsStart').value);
		let pmHoursEnd = parseInt(document.getElementById('pmHoursEnd').value);
		let pmMinsEnd = parseInt(document.getElementById('pmMinsEnd').value);

		// check to see if AM journey times are valid
		if (amHoursStart > 11) { 
			alert("Your AM commute must start before midday") 
			return;
		}  
		if (amHoursEnd < amHoursStart || (amHoursEnd == amHoursStart && amMinsEnd <= amMinsStart)) {
			alert("Your AM commute End Time must be after the Start Time") 
			return;
		}  

		// check to see if PM journey times are valid
		if (pmHoursStart < 12) { 
			alert("Your PM commute must start after midday") 
			return;
		}  
		if (pmHoursEnd < pmHoursStart || (pmHoursEnd == pmHoursStart && pmMinsEnd <= pmMinsStart)) {
			alert("Your PM commute End Time must be after the Start Time") 
			return;
		}
		if (pmHoursStart < amHoursEnd || (pmHoursStart == amHoursEnd && pmMinsStart <= amMinsEnd)) {
			console.log(pmHoursStart, amHoursEnd)
			alert("Your PM commute must start after your AM commute ends") 
			
			return;
		}
		
		//Saves Home and Work destinations
		localStorage.inputHome = inputHome;
		localStorage.inputWork = inputWork;
	
		//Saves am journey times
		localStorage.amHoursStart = parseInt(amHoursStart);
		localStorage.amMinsStart = parseInt(amMinsStart);
		localStorage.amHoursEnd = parseInt(amHoursEnd);
		localStorage.amMinsEnd = parseInt(amMinsEnd);

		//Saves pm journey times
		localStorage.pmHoursStart = parseInt(pmHoursStart);
		localStorage.pmMinsStart = parseInt(pmMinsStart);
		localStorage.pmHoursEnd = parseInt(pmHoursEnd);
		localStorage.pmMinsEnd = parseInt(pmMinsEnd);
		
		window.location.reload(true);

	}

}
