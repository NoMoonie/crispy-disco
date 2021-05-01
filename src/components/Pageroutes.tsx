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

const Pagetransiton = {
    init: {
        opacity: 0,
        x: "-100vw",
    },
    show: {
        opacity: 1,
        x: 0,
    },
    hidden: {
        opacity: 0,
        x: "100vw",
    },
};

const transition = {
    duration: 0.5,
};

const Pageroutes = () => {
    const location = useLocation<LocationState>();
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                    <motion.div
                        variants={Pagetransiton}
                        initial="init"
                        animate="show"
                        exit="hidden"
                        transition={transition}
                    >
                        <Home />
                    </motion.div>
                </Route>
                <Route exact path="/about">
                    <motion.div
                        variants={Pagetransiton}
                        initial="init"
                        animate="show"
                        exit="hidden"
                        transition={transition}
                    >
                        <About />
                    </motion.div>
                </Route>
                <Route exact path="/projekts">
                    <motion.div
                        variants={Pagetransiton}
                        initial="init"
                        animate="show"
                        exit="hidden"
                        transition={transition}
                    >
                        <Projekts />
                    </motion.div>
                </Route>
                <Route exact path="/gallery">
                    <motion.div
                        variants={Pagetransiton}
                        initial="init"
                        animate="show"
                        exit="hidden"
                        transition={transition}
                    >
                        <Gallery />
                    </motion.div>
                </Route>
                <Route exact path="/contact">
                    <motion.div
                        variants={Pagetransiton}
                        initial="init"
                        animate="show"
                        exit="hidden"
                        transition={transition}
                    >
                        <Contact />
                    </motion.div>
                </Route>
            </Switch>
        </AnimatePresence>
    );
};

export default Pageroutes;
