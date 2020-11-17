import React from 'react';
import './style.scss';
import DataUser from './pages/data-user';
import Users from './pages/users';
import Dashboard from './pages/dashboard';
import Reserve from './pages/reserve';
import Available from './pages/available';
import ConfirmSeats from './pages/confirm-seats';
import Booking from './pages/booking';
import AddUser from './pages/add-user';
import Role from './pages/role';
import Sidebar from './component/sidebar';
import Building from './pages/building';
import BuildingView from './pages/buildingview';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/component/sidebar" component={Sidebar} />
                <Route path="/pages/data-user"  >
                    <DataUser />
                </Route>
                <Route path="/pages/users" >
                    <Users />
                </Route>
                <Route path="/pages/building" >
                    <Building />
                </Route>

                <Route path="/pages/buildingview" >
                    <BuildingView />
                </Route>

                <Route path="/pages/reserve" >
                    <Reserve />
                </Route>
                <Route path="/pages/available" >
                    <Available />
                </Route>
                <Route path="/pages/confirm-seats" >
                    <ConfirmSeats />
                </Route>
                <Route path="/pages/booking" >
                    <Booking />
                </Route>
                <Route path="/pages/add-user" >
                    <AddUser />
                </Route>
                <Route path="/pages/role" >
                    <Role />
                </Route>
                
            </Switch>

        </Router>

    );
}

export default App;
