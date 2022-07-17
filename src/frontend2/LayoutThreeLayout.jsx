import React from 'react'
import routes from '../routes/routes';
import { Route } from 'react-router-dom'
import FooterMenu from './FooterMenu';

const LayoutThreeLayout = () => {
    return(
        <div className='layout-theree-main'>
            <div className='layout-theree-content'>
                {routes.map((data,idx)=>{
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
            <FooterMenu />
        </div>
    )
}
export default LayoutThreeLayout;