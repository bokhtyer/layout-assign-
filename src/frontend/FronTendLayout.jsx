import React from "react";
import { Switch, Route } from 'react-router-dom'
import routes from "../routes/routes";
import Header from "./Header";

const FronTendLayout = () => {
    return(
        <div className="layout-one">
            <Header />
            <Switch>
                {routes.map((data, idx)=> {
                    return(
                        data.component && (
                            <Route
                            key={idx}
                            path={data.path}
                            exact={data.exact}
                            name={data.name}
                            render={(props)=>(
                                <data.component {...props} />
                            )}
                            />
                        )
                    )
                })}
            </Switch>
        </div>
    )
}
export default FronTendLayout;