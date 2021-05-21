import { Pagetransiton, transition } from "components/Pageroutes";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import Loading from "components/util/Loading";
const GalleryStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
    gap: 0.5em;
    padding: 1em;
    padding-top: 0.5em;
    min-height: 100vh;
`;

const Wrapper = styled.div<{ imgUrl?: string }>`
    background-position: center;
    background-size: 105%;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.imgUrl});
    background-color: ${(props) => props.theme.main.bg};
    border-radius: 10px;
    @media (min-width: 1100px) {
        background-size: 110%;
        &.card-wide {
            grid-column: span 2 / auto;
        }
    }
    &.card-tall {
        grid-row: span 2 / auto;
    }
`;

const Gallery = () => {
    const [snapshot, loading, error] = useDocumentOnce(firebase.firestore().doc("about/gallery"));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <GalleryStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
            {loading && <Loading />}
            {snapshot?.data()?.images.map((item: any) => {
                return <Wrapper className={item.card} imgUrl={item.url}></Wrapper>;
            })}
            <Wrapper className="card-tall "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-tall "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
            <Wrapper className="card-wide card-tall"></Wrapper>
            <Wrapper className="card-tall"></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
        </GalleryStyle>
    );
};

export default Gallery;
