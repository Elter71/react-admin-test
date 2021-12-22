import React from "react";
import { List, Datagrid, TextField } from 'react-admin';
import PaginationComponent from "../common/Pagination";


export const LocationList: React.FC = (props) => {
    return (
        <List {...props} perPage={20} pagination={<PaginationComponent/>}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="type"/>
            </Datagrid>
        </List>
    );
}
