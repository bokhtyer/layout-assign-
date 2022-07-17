import React from 'react'
import { Route } from 'react-router-dom';
import LayoutThreeLayout from '../frontend2/LayoutThreeLayout';

function LayoutThreeRoute({ ...rest }){
    return(
        <Route {...rest} render={ (props) => <LayoutThreeLayout {...props} /> } />
    )
}
export default LayoutThreeRoute;