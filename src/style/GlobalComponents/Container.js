import {Fragment} from 'react'
import {ThemeProvider} from 'styled-components'
import {dark,light} from '../theme'
import {motion} from 'framer-motion'
import {createGlobalStyle} from 'styled-components'
import React from 'react';
import {useState} from 'react';
import Mine from './Minecraft.ttf'
export const ThemeUpdateContext= React.createContext((theme:light)=>{console.log('Error! Cannot set theme outside of a ThemeContext')});
const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: Minecraft;
        src: url(${Mine}) format('truetype');
}
	body{
		background-color:${(props)=>props.theme.colors.bg}
			
	}
	li{
	    list-style-type:none;
	}
`
const transitions  ={
	in:{ opacity:1,
		y:0,
	},
	out:{
		opacity:0,
		y:"-100%",
	}
}
const Box= ({children})=>{
	const [theme,setTheme] = useState(light);
	return(
		<Fragment>
		<div >
		<ThemeProvider theme={theme}>
		<ThemeUpdateContext.Provider value={setTheme}>
		<GlobalStyle/>
		<Fragment>{children}</Fragment>
		</ThemeUpdateContext.Provider>
		</ThemeProvider>
		</div>
		</Fragment>
	);
}
export default Box;
