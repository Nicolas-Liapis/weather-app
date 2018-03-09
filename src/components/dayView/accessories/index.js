// import preact
import { h, render, Component } from 'preact';

// import styles from local .less sheet
import style from './style.less';

	
export default class Accessories extends Component {

	render(props, state) {

			// define class names for accessory icons using props status
		var umbrellaClassName = (props.umbrellaOn) ?  style.umbrellaOn : style.umbrellaOff ;
		var coatClassName = (props.coatOn) ?  style.coatOn : style.coatOff ;
		var sunglassesClassName = (props.sunglassesOn) ?  style.sunglassesOn : style.sunglassesOff ;

		return (
				
			<div class={style.accessoriesBackground}> {/* add background image */}			
					
				<div className={ style.leftIcon }> {/* add container for left-hand icon (umbrella) */}
					<div class={ umbrellaClassName }></div> {/* add umbrella icon styled using variable classname */}
				</div>
								
				<div class={ style.centreIcon }> {/* add container for centre icon (coat) */}
					<div class={ coatClassName }></div> {/* add coat icon styled using variable classname */}
				</div>
								
				<div class={ style.rightIcon }> {/* add container for right-hand icon (sunglasses) */}
					<div class={ sunglassesClassName }></div> {/* add sunglasses icon styled using variable classname */}		
				</div>

			</div>
		);
	}
	
}