import { Fragment } from "react";
import { useEffect } from "react";
import { AppointmentDIV,AppointmentHover} from "./CalendarStyles";
const Appointment=(props)=>{

	const mouseIn=(e)=>{
			console.log('Holas!')
			props.handleHover({state:1,desc:props.data.description,x:e.pageX,y:e.pageY})	
			console.log(e);
			

	}
	const mouseOut=()=>{
			console.log('Holas!')
			props.handleHover({state:null,desc:"Hello!"})	

	}
	return (
		<Fragment>
		<AppointmentDIV onClick={()=>props.handleClick({day:props.data.day,year:props.data.year,month:props.data.month,mode:1,data:props.data})} onMouseLeave={()=>mouseOut} onMouseEnter={()=>mouseIn
		}>{props.data.title}</AppointmentDIV>
		</Fragment>
	);
}
export default Appointment;
