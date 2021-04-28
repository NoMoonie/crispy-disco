import { ThemeProvider } from "styled-components";
import GlobalStyle from "styled/globalStyle";
import Theme from "styled/theme.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FaHome, FaEnvelope, FaImage, FaUser, FaCode } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "components/Layout";
import Home from "pages/Home";
import About from "pages/About";
import Navbar from "components/Navbar";
import Navitem from "components/Navitem";
import Footer from "components/Footer";
import Projekts from "pages/Projekts";
import Gallery from "pages/Gallery";
import Contact from "pages/Contact";

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
                <AnimatePresence exitBeforeEnter>
                    <Route
                        render={({ location }) => (
                            <Layout location={location}>
                                <Switch location={location} key={location.pathname}>
                                    <Route exact path="/">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <Home />
                                        </motion.div>
                                    </Route>
                                    <Route exact path="/about">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <About />
                                        </motion.div>
                                    </Route>
                                    <Route exact path="/projekts">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <Projekts />
                                        </motion.div>
                                    </Route>
                                    <Route exact path="/gallery">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <Gallery />
                                        </motion.div>
                                    </Route>
                                    <Route exact path="/contact">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <Contact />
                                        </motion.div>
                                    </Route>
                                </Switch>
                            </Layout>
                        )}
                    />
                </AnimatePresence>
                <Footer />
            </ThemeProvider>
        </Router>
    );
};

export default App;
