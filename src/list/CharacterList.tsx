import React from "react";
import { List, Datagrid, TextField, ImageField,Pagination } from 'react-admin';

const CharacterPagination: React.FC = props => <Pagination rowsPerPageOptions={[20]} {...props} />;

export const CharacterList: React.FC = (props) => {
    return (
        <List {...props} perPage={20} pagination={<CharacterPagination/>}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ImageField source="image"/>
                <TextField source="name" />
                <TextField source="status" />
            </Datagrid>
        </List>
    );
}
