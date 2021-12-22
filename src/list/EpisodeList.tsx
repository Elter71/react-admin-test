import React from "react";
import { List, Datagrid, TextField } from 'react-admin';
import PaginationComponent from "../common/Pagination";


export const EpisodeList: React.FC = (props) => {
    return (
        <List {...props} perPage={20} pagination={<PaginationComponent/>}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="episode"/>
                <TextField source="name" />
                <TextField source="air_date"/>

            </Datagrid>
        </List>
    );
}
