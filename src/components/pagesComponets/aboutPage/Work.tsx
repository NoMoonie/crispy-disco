import Loading from "components/util/Loading";
import { FC } from "react";
import { Box2 } from "styled/aboutPageStyle";
import { dbinterface } from "./Education";
import List from "./List";
import ListItem from "./ListItem";

const Work: FC<dbinterface> = ({ error, loading, snapshot }) => {
    return (
        <Box2>
            <h1>Work Experience</h1>
            <List loading={loading}>
                {/* {error && <strong>Error: {JSON.stringify(error)}</strong>} */}
                {loading && <Loading />}
                {snapshot?.data()?.work.map((item: any) => {
                    return (
                        <ListItem key={item.title} title={item.title} startdate={item.startdate} enddate={item.enddate}>
                            {item.body}
                        </ListItem>
                    );
                })}
            </List>
        </Box2>
    );
};

export default Work;
