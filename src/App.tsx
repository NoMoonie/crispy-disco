import { ThemeProvider } from "styled-components";
import GlobalStyle from "styled/globalStyle";
import Theme from "styled/theme.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FaAngleDown, FaItchIo, FaGithub } from "react-icons/fa";
import Home from "pages/Home";
import About from "pages/About";
import Navbar from "components/Navbar";
import Navitem from "components/Navitem";
import DropDownMenu from "components/DropDownMenu";

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <Navbar>
                    <Navitem icon={<FaItchIo />} />

                    <Navitem icon={<FaAngleDown />}>
                        <DropDownMenu />
                    </Navitem>

                    <Navitem icon={<FaGithub />} />
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
