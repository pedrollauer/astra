import React, {useContext, useState,Fragment} from 'react';
import {BsStackOverflow,BsSunFill,BsMoonFill} from 'react-icons/bs'
import {dark,light} from '../../style/theme'
import {ThemeUpdateContext} from '../../style/GlobalComponents/Container'
import {DD,DDButton,Switch,ConfigMenu, Container,Menu} from './HeaderStyles';
import {ThemeContext} from 'styled-components';

const Header = (props) =>  {
		console.log('Hey---->');

		
		const activeTheme = useContext(ThemeContext);
		const setTheme = useContext(ThemeUpdateContext);
		const EN = () =>{ return <Fragment>Lunar</Fragment>} 

		const BR= () =>{ return <Fragment>Age of Pisces</Fragment>} 

		return(
		<Container >
		<Menu>

		<ConfigMenu>	
			<DDButton onClick={props.setLang}>{props.currentLang===1?<EN/>:<BR/>}</DDButton>
				<Switch value="Dark" onClick={()=>{setTheme(activeTheme===dark?light:dark)}}>{activeTheme==dark?<BsSunFill/>:<BsMoonFill/>}</Switch>

			</ConfigMenu>
		<li>ASTRA</li>
		<li>
		HOME	
		</li>
		<li>
			CONFIG
		</li>
		<li>
			ABOUT
		</li>
		
		</Menu>
	{
	}
		</Container>
);}

export default Header;
