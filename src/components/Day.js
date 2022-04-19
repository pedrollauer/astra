import { AppointmentDIV, DayStyle } from "./CalendarStyles";
import {useState} from 'react';

const Day=(props)=>{
	const [show,setShow]=useState(0);
	return(
	<DayStyle onMouseEnter={()=>setShow(1)} onMouseLeave={()=>setShow(0)}>
	
			{props.day}
			<AppointmentDIV show={show} onClick={()=>{props.details({day:props.day,month:props.month,year:props.year})}} >Create New Task</AppointmentDIV>

			{props.children}
		</DayStyle>	
	);
}
export default Day;
