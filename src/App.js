import Hover from './components/Hover'
import {useState,useEffect} from 'react'
import Footer from './components/Footer/Footer';
import Popup from './components/Popup';
import './App.css';
import Calendar from './components/Calendar';
import Container from './style/GlobalComponents/Container'
import {light,dark} from './style/theme';
import {createGlobalStyle,ThemeProvider} from 'styled-components';
import Header from './components/Header/Header'

const GlobalTheme = createGlobalStyle`
	body{
		background-color:${props=>props.theme.colors.bg};
	li{
	  list-style-type:none;
	}
	}
`

function App() {
	const currentDate=(new Date());
	const [pop,setPop] = useState(0);
	const [hover,setHover] = useState({state:0,desc:"",x:0,y:0});
	const [bundle,setData] = useState({thisMonth:[]})

	const	[details,setDetails] = useState({day:1});
	
	const handleHover=(state)=>{
		setHover(state)
	}
	const handlePop=(data)=>{
		console.log(1);
	setDetails(data)
	setPop(pop==0?1:0);
	}
	useEffect(() => {
    postData()
    return ()=>{}
    }, [])
	    
    const postData = async () => {
    
    const requestOptions = {
                    method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({lang:'1'})
            }
        const response = await fetch('http://localhost:3000/calendar', requestOptions )
        const data= await response.json()
	console.log(data);
	setData(data);
	console.log("Fuck!");
    }
	console.log(bundle);
  return (
    <div className="App">
	<Container>  
	 {document.title='astra'}
	  <Hover display={hover}/>
	  <Popup handleClose={handlePop} show={pop} details={details}/>
	  <Header/>
	  <GlobalTheme/>
	  <Calendar handleHover={handleHover} bundle={bundle}handleClick={handlePop}/>;
	  <Footer/>
	  </Container>
    </div>
  );
}

export default App;
