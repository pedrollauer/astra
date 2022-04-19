import { DYNH3,PopupStyle,Console,Input, Close,Send} from "./CalendarStyles";
import { useState,useEffect,useRef} from "react";
import {Fragment} from 'react';
import {ReactComponent as SVG} from './undraw_exciting_news_re_y1iw.svg'
import {ReactComponent as SVG_1} from './undraw_design.svg'

const EditMode=(props)=>{


	let stack;
		stack=<Fragment>
		<form>
		<DYNH3>Title</DYNH3>
		<Input autoFocus value={props.details.data.title}type="text"/><br/>
		<DYNH3 show={1}>Description</DYNH3>
		<Console value={props.details.data.description}show={1} /><br/>
		<DYNH3 show={1}>Date</DYNH3>
	<Input show={1}type="text" 
		value={ props.details.year+'-'+('0'+props.details.month).slice(-2)+'-'+('0'+props.details.day).slice(-2)}/>
		</form>
		</Fragment>
	return(<Fragment>
		{stack}
		</Fragment>)
}
const parseDate=(date)=>{
	
}
const CreateMode=(props)=>{
    const [newEvent,setEvent] = useState({});
	const [step,setStep]=useState(0);	
	const [newData,setNewData] = useState({});
	useEffect(() => {
    postData()
    return ()=>{}
    }, [newData])
    const postData = async () => { 
    const requestOptions = {
                    method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newData)
            }
        const response = await fetch('http://localhost:3000/calendar', requestOptions )
        const data= await response.json()
    }
	const pushEvent =(push)=>{	
			  setEvent({...newEvent,...push});
	}
const sendData=()=>{

		  setNewData(newEvent);
}
const handleEnter=(event)=> {
  if (event.keyCode === 13) {
	let push;
			  push={title:event.target.value};
			  setEvent({...push});
	  switch(step){
		  case 0:
			  console.log('Im running');
			  push={title:event.target.value};
			  pushEvent(push);
			  console.log(newEvent);
			  break;
		  case 1:
			  push={description:event.target.value};
			  setEvent({...newEvent,...push});
			 
			  break;
		 case 2:
			  push={date:event.target.value};
			  setEvent({...newEvent,...push});
			  
			  break;
	  }
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
	  console.log('Hey---->',index);
	  console.log(form.elements.length);
  if(form.elements.length>index+1){
    form.elements[index + 1].focus();
    event.preventDefault();
  }
	  else{
    setStep(step+1);
		  
  }
}}

	let stack;
		stack=<Fragment>
		<form>
		<DYNH3>Give your task a title</DYNH3>
		<Input autoFocus type="text" onKeyDown={handleEnter}/><br/>
		<DYNH3 show={step>=1?1:0}>Describe your task</DYNH3>
		<Console show={step>=1?1:0} onKeyDown={handleEnter}/><br/>
		<DYNH3 show={step>=2?1:0}>Give it a date</DYNH3>
	{props.details.day==-1?<Input show={step>=2?1:0}type="text" onKeyDown={handleEnter}/>:<span> Date: {props.details.year}-{('0'+props.details.month).slice(-2)}-{('0'+props.details.day).slice(-2)}</span>}
		<Send type="button" show={step>=3?1:0} onClick={()=>{
			sendData();
			props.handleClose({day:0,year:0,month:0})
		}}>Create</Send>
		  
		</form>
		</Fragment>
	return(<Fragment>
		{stack}
		</Fragment>)
}


const Popup=(props)=>{
	const arrow='-> '
	const	[message,setMessage] = useState();
	const editMode = <Fragment>EDITAR - {props.details.day}</Fragment>
	
	console.log(message);
	const	halfStyle={
		width:'500px',
		height:'100%',
		paddingLeft:'50px'
	}
	let popUp;
	const handleClose=()=>{
		console.log('Close!');
	}
	if(props.details.mode==null){	
			popUp=<CreateMode handleClose={props.handleClose} details={props.details}/>;	
	}else{
		popUp=<EditMode details={props.details}/>;	
	}
	return (
		<PopupStyle show={props.show}> 
		<Close onClick={props.handleClose}>X</Close>
		<div>
		{props.details.mode==null?<SVG style={{width:'400px',height:'100%'}}/>:<SVG_1 style={{width:'400px',height:'100%'}}/>}
		</div>
		<div style={halfStyle}>
		{popUp}
		</div>	
		</PopupStyle>
	);
}
export default Popup;
