import styled from 'styled-components';

export const Send=styled.button`
	width:100px;
	height:30px;
	margin-top:10px;
	border-style:solid;
	border-color:white;
	color:white;
	text-align:center;
	opacity:${props=>props.show};
	background-color:transparent;

`
export const AppointmentHover=styled.div`
	width:200px;
	background-color:lightcyan;
	position:absolute;
	top:${props=>props.positionY+'px'};
	left:${props=>props.positionX+'px'};
	z-index:999;
	opacity:${props=>props.show};
	padding:10px;
	font-weight:bold;

`
export const Close=styled.button`
	width:30px;
	height:30px;
	background-color:indianred;
	position:absolute;
	right:10px;
	top:10px;
	outline:none;
	border-style:none;
	color:white;
`
export const AppointmentDIV=styled.div`
	width:100%;
	height:20px;
	font-size:16px;
	background-color:lightblue;
	font-weight:bolder;
	text-align:center;
	cursor:pointer;
	opacity:${props=>props.show==0?0:1};
	transition:opacity 1s;
	color:${props=>props.theme.colors.bg};
`
export  const DYNH3 = styled.h3`
	color:${props=>props.theme.colors.bg};
	opacity:${props=>props.show};
	transition: opacity 1s;
`
export const Input= styled.input`
	background-color:${props=>props.theme.colors.primary};
	color:${props=>props.theme.colors.bg};
	opacity:${props=>props.show};
	transition: opacity 1s;
	outline:none;
	border-style:none;
	font-size:20px;

`
export const Console = styled.textarea`
	width:200px;
	height:100px;
	margin-top:20px;
	box-sizing:border-box;
	background-color:${props=>props.theme.colors.primary};
	color:${props=>props.theme.colors.bg};
	opacity:${props=>props.show};
	transition: opacity 1s;
	border-style:none;
	outline:none;
	font-size:20px;


	
`
export const Sheet=styled.div`
	position:relative;
	background-color:${props=>props.theme.colors.bg};
	padding-top:50px;
	width:80%;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin:auto;
`
export const HeaderDiv = styled.div`

	background-color:${props=>props.theme.colors.quinquinary};
	position:relative;
	color:${props=>props.theme.colors.notBg};
	text-align:center;
`
export const SVGC=styled.div`
	width:50%;
	height:100%;
	position:absolute;
	top:0px;
	right:0px;
	z-index:0;
	padding-top:20px;
	box-sizing:border-box;
`;

export const Slider =styled.input`
	background:${props=>props.theme.colors.bg};
	height:5px;
	width:50%;
	margin:10px;
`;
export const CHeader=styled.div`
	position:relative;
	width:100%;
	height:300px;
	color:${props=>props.theme.colors.notBg};
	z-index:1;
	
	font-size:36px;
`

export const NewTask = styled.button`
	position:absolute;
	bottom:10px;
	right:10px;
	width:100px;
	height:30px;
`

export const DaysWeek = styled.div`
	text-align:center;
	height:50px;
	color:${props=>props.theme.colors.secondary};
	background-color:${props=>props.theme.colors.primary};
	box-sizing:border-box;
	padding-top:10px;
	box-shadow:0px 10px lightblue;
`
export const Month=styled.div`
	background-color:${props=>props.theme.colors.seventh};
	width:100%;
	display:grid;
	gap:2px;
	box-sizing:border-box;
	grid-template-columns:repeat(7,1fr);
`

export const CreateHover = styled.div`
	paddingLeft:10px;
	span{
		opacity:0;
	}
		
`
export const DayStyle = styled.div`
	background-color:${props=>props.theme.colors.quaternary};
	color:${props=>props.theme.colors.notBg};
	height:200px;
	text-align:left;
	box-sizing:border-box;
	overflow:auto;
&:hover div{

	background-color:${props=>props.theme.colors.primary};
	color:${props=>props.theme.colors.bg};
	cursor:pointer;
	display:block;
}

&:hover span{
	opacity:1;
	color:white;
}
`

export const PopupStyle=styled.div`
	width:50%;
	height:420px;
	position:absolute;
	top:0;
	left:0;
	bottom:0;
	right:0;
	margin:auto;
	background-color:${props=>props.theme.colors.primary};
	z-index:1000;
	transition: opacity 1s;
	opacity:${props=>props.show};
	display:flex;
`
