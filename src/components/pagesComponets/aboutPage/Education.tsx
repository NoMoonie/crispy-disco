import Loading from "components/Loading";
import { FC } from "react";
import { Box2 } from "styled/aboutPageStyle";
import List from "./List";
import ListItem from "./ListItem";

export interface dbinterface {
    error: any;
    loading: boolean;
    snapshot: any;
}

const Education: FC<dbinterface> = ({ error, loading, snapshot }) => {
    return (
        <Box2>
            <h1>Education</h1>
            <List loading={loading}>
                {/*  {error && <strong>Error: {JSON.stringify(error)}</strong>} */}
                {loading && <Loading />}
                {snapshot?.data()?.education.map((item: any) => {
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

export default Education;
