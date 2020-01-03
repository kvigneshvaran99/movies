import React, { Component } from 'react';
import "./Components.css";

export default class signupModal extends Component {
    constructor(props){
        super(props);
        this.state={
            fName:"",
            lName:"",
            eMail:"",
            userName:"",
            passWord:"",
            exception:""
        }
    }


    handleChange=(event)=>{
        this.setState({[event.target.name] : event.target.value})
    }
    addUser(){
        var user=localStorage.getItem(this.state.userName);
        if(user===null){
            var obj={
                first_name:this.state.fName,
                last_name:this.state.lName,
                email:this.state.eMail,
                user_name:this.state.userName,
                passWord:this.state.passWord
            }
            localStorage.setItem(this.state.userName,JSON.stringify([{"details":obj},{"FAV":[]},{"WISHLIST":[]}]));
            localStorage.setItem("currentUser",this.state.userName);
            this.props.show1Modal();
            this.setState({exception:""})
            this.setState({
                fName:"",
                lName:"",
                eMail:"",
                userName:"",
                passWord:"",
                exception:""
            })

        }
        else{
            
           this.setState({
               exception:<div>
               <h4 style={{color:"white"}}>User already Exists</h4>
           </div>
           }
            )
    }}


    render() {
      
        return (
            
            <div style={{display:(this.props.show1?"block":"none")}}>
                <div id="signup_modal" >
               
                <div id="signup_part">
               
                <div className="signup_details">
                <span id="close_modal" onClick={()=>this.props.show1Modal()}> X</span>
                    <h2 className="text_color">User Details:</h2>
                     <h4 className="text_color">First Name</h4>
                     <input id="first_name" className="inp_class signup_inp" name="fName" onChange={(event)=>this.handleChange(event)} value={this.state.fName} required/>
                     <h4 className="text_color">Last Name</h4>
                     <input id="last_name" className="inp_class signup_inp" name="lName" onChange={(event)=>this.handleChange(event)} value={this.state.lName} required/>
                     <h4 className="text_color">E-Mail</h4>
                     <input type="email" id="email" className="inp_class signup_inp" name="eMail" onChange={(event)=>this.handleChange(event)} value={this.state.eMail} required/>
                     <h4 className="text_color">Username</h4>
                     <input id="user_name" className="inp_class signup_inp" name="userName" onChange={(event)=>this.handleChange(event)} value={this.state.userName} required/>
                     <h4 className="text_color">Password</h4>
                     <input type="password" id="pwd" className="inp_class signup_inp" name="passWord" onChange={(event)=>this.handleChange(event)} value={this.state.passWord} required/>
                     <br/>
                    <div className="both_btn" style={{marginTop:"20px"}}>
                    {this.state.exception}
                       <button className="lib_btn sign_btn" onClick={()=> this.addUser()} >Sign-Up</button>
                       
                    </div>
                </div>

            </div>
            </div>
            
            </div>
        )
    }
}
