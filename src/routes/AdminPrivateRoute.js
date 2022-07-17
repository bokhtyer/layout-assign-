import React from "react";
import { Route } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";

function AdminPrivateRoute({...rest}){
    return (
        <Route {...rest} render={ (props) => <AdminLayout {...props} /> } />
    )
}
export default AdminPrivateRoute;