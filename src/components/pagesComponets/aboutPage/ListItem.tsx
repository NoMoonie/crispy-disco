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
        margin-left: 1em;
    }
`;

const WorkItem: FC<ListItemInterface> = ({ title, startdate, enddate, children }) => {
    return (
        <section>
            <h1 style={{ fontSize: "14pt" }}>{title}</h1>
            <ListDate>
                <FaCalendarAlt className="cal" />
                <p>
                    {startdate} - {enddate}
                </p>
            </ListDate>
            <p style={{ marginTop: "1em" }}>{children}</p>
        </section>
    );
};

export default WorkItem;
