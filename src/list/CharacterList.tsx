import React from "react";
import {
    List,
    Datagrid,
    TextField,
    ImageField,
    ReferenceField
} from 'react-admin';
import PaginationComponent from "../common/Pagination";

export const CharacterList: React.FC = (props) => {
    return (
        <List {...props} perPage={20} pagination={<PaginationComponent/>}>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <ImageField source="image"/>
                <TextField source="name" />
                <TextField source="status" />
                <ReferenceField source="location.id" reference="location" link="show">
                    <TextField source="name" />
                </ReferenceField>
            </Datagrid>
        </List>
    );
}
