import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "pages/Home";
import About from "pages/About";
import Projekts from "pages/Projekts";
import Gallery from "pages/Gallery";
import Contact from "pages/Contact";

interface LocationState {
    from: {
        pathname: string;
    };
}

export const Pagetransiton = {
    init: {
        opacity: 0,
        x: "100vw",
    },
    show: {
        opacity: 1,
        x: 0,
    },
    hidden: {
        opacity: 0,
        x: "-100vw",
    },
};

export const transition = {
    duration: 0.5,
};

const Pageroutes = () => {
    const location = useLocation<LocationState>();
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
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
        </AnimatePresence>
    );
};

export default Pageroutes;
