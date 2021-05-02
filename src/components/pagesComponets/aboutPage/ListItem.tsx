import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import { FC } from "react";

interface ListItemInterface {
    title: string;
    startdate: string;
    enddate: string;
}

const ListDate = styled.div`
    display: flex;
    color: ${(props) => props.theme.main.scbg};
    .cal {
        width: 20px;
        height: 20px;
    }
    p {
        margin-left: 0.5em;
    }
`;

const Section = styled.section`
    /* border-right: ${(props) => props.theme.main.border};
    border-bottom: ${(props) => props.theme.main.border}; */
    border-radius: 10px;
`;

const WorkItem: FC<ListItemInterface> = ({ title, startdate, enddate, children }) => {
    return (
        <Section>
            <h2 style={{ fontSize: "13pt" }}>{title}</h2>
            <ListDate>
                <FaCalendarAlt className="cal" />
                <p>
                    {startdate} - {enddate}
                </p>
            </ListDate>
            <p style={{ marginTop: "0.1em" }}>{children}</p>
        </Section>
    );
};

export default WorkItem;
