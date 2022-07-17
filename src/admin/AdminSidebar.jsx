import React from "react";
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return(
        <div className="admin-sidebar">
            <ul>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/admin/forum'>Forum Page</Link></li>
                <li><Link to='/admin/product'>Product</Link></li>
                <li><Link to='/'>Home Page</Link></li>
            </ul>
        </div>
    )
}
export default AdminSidebar;