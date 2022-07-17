import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 align-self-center'>
                        <h2>
                            <Link to='/'>LOGO</Link>
                        </h2>
                    </div>
                    <div className='col-10'>
                        <div className='mneu text-right'>
                            <ul>
                                <li><Link to='/'>Home</Link>
                                    <ul>
                                        <li><Link to='/'>Layout 1</Link></li>
                                        <li><Link to='/lay3'>Layout 2</Link></li>
                                        <li><Link to='/admin'>Admin</Link></li>
                                    </ul>
                                </li>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;