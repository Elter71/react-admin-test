import React from "react";
import {Pagination} from "react-admin";

const PaginationComponent: React.FC = props => <Pagination rowsPerPageOptions={[20]} {...props} />;

export default PaginationComponent;
