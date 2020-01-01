import React, { Component } from 'react';
import "./Components.css";

export default class signinModal extends Component {
    render() {
        return (
            <div>
                <div id="signin_modal">
               
                <div id="signin_part">
               
                <div className="signup_details">
                <span id="close_modal"> X</span>
                    <h2 className="text_color">User Details:</h2>
                     <h4 className="text_color">First Name</h4>
                     <input id="first_name" className="inp_class signup_inp" required/>
                     <h4 className="text_color">Last Name</h4>
                     <input id="last_name" className="inp_class signup_inp" required/>
                     <h4 className="text_color">E-Mail</h4>
                     <input type="email" id="email" className="inp_class signup_inp" required/>
                     <h4 className="text_color">Username</h4>
                     <input id="user_name" className="inp_class signup_inp" required/>
                     <h4 className="text_color">Password</h4>
                     <input type="password" id="pwd" className="inp_class signup_inp" required/>
                     <br/>
                    <div className="both_btn" style={{marginTop:"20px"}}>
                       <button className="lib_btn sign_btn" >Sign-Up</button>
                       
                    </div>
                </div>

            </div>
            </div>
            
            </div>
        )
    }
}
