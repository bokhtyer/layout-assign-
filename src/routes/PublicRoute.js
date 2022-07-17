import React from "react";
import { Route } from "react-router-dom";
import FronTendLayout from "../frontend/FronTendLayout";

function PublicRoute({...rest}){
    return (
        <Route {...rest} render={ (props) => <FronTendLayout {...props} /> } />
    )
}
export default PublicRoute;