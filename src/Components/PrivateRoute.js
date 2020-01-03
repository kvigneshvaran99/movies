import React, { Component } from 'react'
import {BrowserRouter as Route,Redirect,withRouter} from "react-router-dom";
const PrivateRoute=({ path, component: Component, ...rest})=>{
    let user=localStorage.getItem("currentUser");
    let userDetails=JSON.parse(localStorage.getItem(user));
    return (user&&userDetails) ? (
        <Route path={path} {...rest} render={(props) => <Component {...props} />} />
    ) : (
        <Redirect to="/" />
    );
//     return (
//         <Route
//             path
//             {...rest}
//              render={(props) => {return user ? <Component {...props} /> : <Redirect to="/"/> }} />
//     )
}

export default withRouter( PrivateRoute);