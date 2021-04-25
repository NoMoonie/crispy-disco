import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import { FC } from "react";

interface ListItemInterface {
    title: string;
    startdate: string;
    enddate: string;
}

const ListItemStyle = styled.section``;

const Title = styled.h1`
    font-size: 14pt;
`;

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

const Parag = styled.p`
    margin-top: 1em;
`;

const WorkItem: FC<ListItemInterface> = ({ title, startdate, enddate, children }) => {
    return (
        <ListItemStyle>
            <Title>{title}</Title>
            <ListDate>
                <FaCalendarAlt className="cal" />
                <p>
                    {startdate} - {enddate}
                </p>
            </ListDate>
            <Parag>{children}</Parag>
        </ListItemStyle>
    );
};

export default WorkItem;
