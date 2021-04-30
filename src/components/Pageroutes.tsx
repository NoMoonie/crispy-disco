import { Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "components/Layout";
import Home from "pages/Home";
import About from "pages/About";
import Projekts from "pages/Projekts";
import Gallery from "pages/Gallery";
import Contact from "pages/Contact";

const Pageroutes = () => {
    return (
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
    );
};

export default Pageroutes;
