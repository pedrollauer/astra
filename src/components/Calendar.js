import {useState,useEffect,memo} from 'react';
import Appointment from './Appointment';
import {Sheet,Month,CHeader,SVGC,DaysWeek,NewTask,HeaderDiv, AppointmentHover} from './CalendarStyles'
import YearSlider from './YearSlider';
import Day from './Day';
import {ReactComponent as SVG} from './girl_window.svg'


	let bundles= {
		prevMonth:[],
		thisMonth:[
		{
			title:'Jessica',
			description:'Appointment with Jessica',
			day:7,
			month:4,
			year:2022
		},

		{
			title:'Payment',
			description:'Just Pay up Jessica',
			date:'2000/12/12',
			day:17,
			month:4,
			year:2022
		},
		],
		nextMont:[]}
	//This thing must be ordered by date!
	//From the backend

const numDays = function(mes,ano) {
	console.log(mes,ano);
 return new Date(ano,mes+1, 0).getDate();

};

const elapsedDays=function(year,month,day){
	//Problematic months:
	//august --> 7
	//febuary ->1
	//even months have 30 days
	//odd numbers have 31 days
	let returnMe=0;
	console.log(year+'|'+month+'|'+day)
	if(month==0){return day;}
	if(month-1===0){
		return 30+day;
	}
	if(month-1>=2){
		returnMe+=numDays(1,year)+30;
		console.log('ReturnME------->'+returnMe)
	}
	if(month-1>=7){
		returnMe++;

	}
	for(let j=2;j<=(month-1);j++){
	    j%2==0?returnMe+=31:returnMe+=30;	
	}

	return returnMe+day

}


let currentDate=new Date();
const Calendar =(props)=>{

const bundle=props.bundle;
	const [date,setDate]=useState({month:currentDate.getMonth().valueOf(),year:currentDate.getFullYear().valueOf()});
	const daysOfTheWeek = ['Sunday','Monday','Thursday',
	'Wednesday','Thursday','Friday','Saturday']
	const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
	const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
 
	console.log(date);	
	const numberOfDays=numDays(date.month,date.year);
	const firstDayMonth = new Date(date.year,date.month,1).getDay().valueOf();
	console.log(date);
	console.log(firstDayMonth);
	const lastDayPrev=date.month-1<0?31:numDays(date.month-1,date.year);

	const elapsed=elapsedDays(date.year,date.month,currentDate.getDate().valueOf());
	const style={
		width:'100%',
		height:'100%',
		overflow:'hidden',
	}

	
	const allDays=[];
	let pointer=0;
	for(let i=0;i<35;i++){
		if(i<firstDayMonth){
			const printMe=parseInt(lastDayPrev-(firstDayMonth-1)+i);
							
			allDays.push(<Day key={i} details={props.handleClick} day={printMe}></Day>);
			continue;
		}
		if(i<numberOfDays+firstDayMonth){
		const printMe=parseInt(i-firstDayMonth+1);

		const appointments=[];
			for(let j=pointer;j<bundle.thisMonth.length;j++){
				if(bundle.thisMonth[j].day==printMe){
					appointments.push(<Appointment key={pointer} data={bundle.thisMonth[j]} handleClick={props.handleClick} handleHover={props.handleHover}/>)
				}
				if(bundle.thisMonth[j]>printMe){
					pointer=j;
					break;
				}
			}
		allDays.push(<Day key={i} details={props.handleClick} month={date.month+1} year={date.year} day={printMe}>{appointments}</Day>);

			continue;
		}
		if(i>=numberOfDays+firstDayMonth){
		const printMe=i-(numberOfDays+firstDayMonth)+1;
		allDays.push(<Day key={i} details={props.handleClick} day={printMe}></Day>);
		}
	}
	return(
		<div>
	<Sheet>
		<HeaderDiv>
		<SVGC>
		<SVG style={style}/>
		</SVGC>
		<CHeader>{date.year}<br/>
		{months[date.month]}<br/>
		<button onClick={()=>{
			const newMonth=date.month-1<0?11:date.month-1;
			const newYear=date.month-1<0?date.year-1:date.year;
			setDate({month:newMonth,year:newYear})
		}}>{'<'}</button>
		<button onClick={()=>{
			const newMonth=date.month+1>11?0:date.month+1;
			const newYear=date.month+1<11?date.year:date.year+1;
			setDate({month:newMonth,year:newYear})
		}}>{'>'}</button>
		<NewTask onClick={()=>{props.handleClick({day:-1})}}>New Task</NewTask>
		</CHeader>
		</HeaderDiv>
		<YearSlider elapsed={elapsed}/>
		<Month>	
		{daysOfTheWeek.map((day,index)=>{
			return(<DaysWeek key={index} details={props.handleClick} day={day}>{day}</DaysWeek>);
		})}
		{allDays}
		{}
		</Month>
	</Sheet>
		</div>
	);
}
export default memo(Calendar);
