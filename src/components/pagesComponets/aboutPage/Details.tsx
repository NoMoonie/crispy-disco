import { MdWork } from "react-icons/md";
import { FaHome, FaEnvelope, FaItchIo, FaGithub } from "react-icons/fa";
import { FC } from "react";
import styled from "styled-components";
import Loading from "components/Loading";

interface Detailsinterface {
    professtion: string;
    location: string;
    number: string;
    email: string;
    loading: boolean;
}

const Section = styled.section<{ loading: boolean }>`
    .links {
        cursor: pointer;
        color: ${(props) => props.theme.main.scbg};
        &:hover {
            color: ${(props) => props.theme.main.scAccent};
        }
    }
    height: 220px;
    display: grid;
    place-content: ${(porps) => (porps.loading ? "center" : "")};
`;

const Details: FC<Detailsinterface> = ({ professtion, location, email, number, loading }) => {
    return (
        <Section loading={loading}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1>Details</h1>
                    <p>
                        <MdWork /> {professtion}
                    </p>
                    <p>
                        <FaHome /> {location}
                    </p>
                    <p>
                        <FaEnvelope /> {email}
                    </p>
                    <p className="links" onClick={() => window.open("https://nomoon404.itch.io/", "_blank")}>
                        <FaItchIo /> nomoon404.itch.io
                    </p>
                    <p className="links" onClick={() => window.open("https://github.com/NoMoonie", "_blank")}>
                        <FaGithub /> github.com/NoMoonie
                    </p>
                </>
            )}
        </Section>
    );
};

export default Details;
