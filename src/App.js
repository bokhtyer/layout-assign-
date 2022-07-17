import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import AdminPrivateRoute from "./routes/AdminPrivateRoute";
import LayoutThreeLayout from "./frontend2/LayoutThreeLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <AdminPrivateRoute path='/admin' name='Admin' />
            <LayoutThreeLayout path='/lay3' name='Lay3' />
            <PublicRoute path='/' name='Home' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
