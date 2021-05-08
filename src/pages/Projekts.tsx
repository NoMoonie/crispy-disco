import { Pagetransiton, transition } from "components/Pageroutes";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { items } from "components/pagesComponets/Page/data";
import SelectedCard from "components/pagesComponets/Page/SelectedCard";
import ItemCard from "components/pagesComponets/Page/ItemCard";

const ProjektsStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
    grid-auto-rows: 400px;
    gap: 0.5em;
    min-height: 100vh;
    margin-top: 0.5em;
    margin-bottom: 1em;
    margin-left: 10em;
    margin-right: 10em;
    @media (max-width: 1100px) {
        margin-left: 1em;
        margin-right: 1em;
    }
`;

const Overlay = styled(motion.div)`
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    background-color: hsl(341, 96%, 65%, 0.2);
    place-content: center;
`;

const Projekts = () => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                {selected && (
                    <Overlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(false)}
                    >
                        <SelectedCard selected={selected} />
                    </Overlay>
                )}
            </AnimatePresence>
            <ProjektsStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} selected={selected} setSelected={setSelected}></ItemCard>
                ))}
            </ProjektsStyle>
        </AnimateSharedLayout>
    );
};

export default Projekts;
