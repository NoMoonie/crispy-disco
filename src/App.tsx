import { ThemeProvider } from "styled-components";
import GlobalStyle from "styled/globalStyle";
import Theme from "styled/theme.json";
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import { FaAngleDown, FaItchIo, FaGithub } from 'react-icons/fa';
import firebase from "firebase/app";
import Home from "pages/Home";
import About from "pages/About";
import Navbar from "components/Navbar";
import Navitem from "components/Navitem";
import DropDownMenu from "components/DropDownMenu";

firebase.initializeApp({
	apiKey: "AIzaSyBDNzhaW36jf_i0DEFPITaKbA9Os_n7rKw",
    authDomain: "nomoon404.firebaseapp.com",
    projectId: "nomoon404",
    storageBucket: "nomoon404.appspot.com",
    messagingSenderId: "763360472309",
    appId: "1:763360472309:web:0fdfc5c5257daa2eaaa9bc",
    measurementId: "G-2YS4WGNTV3"
});


const App = () => {
	return (
		<Router>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Navbar>
					<Navitem icon={<FaItchIo/>}/>

					<Navitem icon={<FaAngleDown/>}>
						<DropDownMenu />
					</Navitem>

					<Navitem icon={<FaGithub/>}/>
				</Navbar>
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					<Route exact path="/about">
						<About/>
					</Route>
				</Switch>
    		</ThemeProvider>
		</Router>
	);
}

export default App;

