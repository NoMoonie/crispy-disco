import { ThemeProvider } from "styled-components";
import GlobalStyle from "styled/globalStyle";
import Theme from "styled/theme.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FaHome, FaEnvelope, FaImage, FaUser, FaCode } from "react-icons/fa";
import Home from "pages/Home";
import About from "pages/About";
import Navbar from "components/Navbar";
import Navitem from "components/Navitem";
import Footer from "components/Footer";
import Projekts from "pages/Projekts";
import Gallery from "pages/Gallery";
import Contact from "pages/Contact";

import firebase from "firebase/app";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBDNzhaW36jf_i0DEFPITaKbA9Os_n7rKw",
        authDomain: "nomoon404.firebaseapp.com",
        projectId: "nomoon404",
        storageBucket: "nomoon404.appspot.com",
        messagingSenderId: "763360472309",
        appId: "1:763360472309:web:1c2367c7a466edccaaa9bc",
        measurementId: "G-W9SXEHCS87",
    });
}

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <Navbar>
                    <Navitem link="/contact" icon={<FaEnvelope />} />
                    <Navitem link="/gallery" icon={<FaImage />} />
                    <Navitem link="/" icon={<FaHome />} />
                    <Navitem link="/about" icon={<FaUser />} />
                    <Navitem link="/projekts" icon={<FaCode />} />
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/projekts">
                        <Projekts />
                    </Route>
                    <Route exact path="/gallery">
                        <Gallery />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
                <Footer />
            </ThemeProvider>
        </Router>
    );
};

export default App;
