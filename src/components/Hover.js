import {useEffect,useState} from 'react';
import { AppointmentHover } from './CalendarStyles';

const Hover =(props)=>{
	const [position,setPosition] = useState({x:0,y:0});

//	useEffect(()=>{	document.onmousemove=(e)=>{
//				console.log('I moved!')
//			console.log(e.clientX);
//		if(props.show==0){

//			setPosition({x:e.clientX,y:e.clientY});
//		}
//	}
	
	
//	})
	
	return(
		<AppointmentHover show={props.display.state} positionX={props.display.x} positionY={props.display.y}>{props.display.desc}</AppointmentHover>
	);
}

export default Hover;
