import { ThemeProvider } from "styled-components";
import GlobalStyle from "styled/globalStyle";
import Theme from "styled/theme.json";
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";

import Home from "pages/Home";
import Navbar from "components/Navbar";
import Navitem from "components/Navitem";
import DropDownMenu from "components/DropDownMenu";
import { FaAngleDown, FaBolt, FaBell } from 'react-icons/fa';



const App = () => {
	return (
		<Router>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Navbar>
					<Navitem icon={<FaBolt/>}/>
					<Navitem icon={<FaBell/>}/>

					<Navitem icon={<FaAngleDown/>}>
						<DropDownMenu />
					</Navitem>
				</Navbar>
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
				</Switch>
    		</ThemeProvider>
		</Router>
	);
}

export default App;

