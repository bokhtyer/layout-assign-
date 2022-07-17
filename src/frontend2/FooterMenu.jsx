import React from "react";
import { Link } from 'react-router-dom'

const FooterMenu = () => {
    return(
        <div className="footer-menu">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/lay3'>Lay 3</Link></li>
                <li><Link to='/lay3/page1'>3 Page 1</Link></li>
                <li><Link to='/lay3/page2'>3 Page 2</Link></li>
            </ul>
        </div>
    )
}
export default FooterMenu;