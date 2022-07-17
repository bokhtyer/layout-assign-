import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { Switch, Route } from 'react-router-dom'
import adminroutes from "../routes/adminroutes";

const AdminLayout = () => {
    return(
        <div className="admin-layout">
            <AdminHeader />
            <div className="admin-layout-full">
                <AdminSidebar />
                <div className="admin-main-content">
                    {adminroutes.map((data, idx)=> {
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
                </div>
            </div>
        </div>
    )
}
export default AdminLayout;