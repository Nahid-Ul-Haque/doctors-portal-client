import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import DashBoard from "./Pages/DashBoard/dashboard/DashBoard";
import Home from "./Pages/Home/home/Home";
import Login from "./Pages/Login/login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";


function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/Home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/Appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter >
      </AuthProvider>
    </div>
  );
}

export default App;
