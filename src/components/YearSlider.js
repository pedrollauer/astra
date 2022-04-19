import {Slider,HeaderDiv} from './CalendarStyles';

const YearSlider = (props)=>{
	const elapsed=Math.floor(props.elapsed*(100/365));
	return(
		<HeaderDiv>
		NEW YEAR<Slider disabled type="range" min="0" max="100" value={elapsed}/>CHRISTMAS
		</HeaderDiv>
	);
}
export default YearSlider;
