import React, { Component } from 'react';
import "./Components.css";

export default class signinModal extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:"",
            passWord:"",
            exception:""
        }
    }

   handleChange=(event)=>{
    this.setState({[event.target.name] : event.target.value})
   }
   checkUser(){
       let checkuser=JSON.parse( localStorage.getItem(this.state.userName));
       let checkpass=this.state.passWord;
     
       if(checkuser===null){
          this.setState({
              exception:<div>
                  <h4 style={{color:"white"}}>User Not Found</h4>
              </div>,
              userName:"",
              passWord:""
          })
          }
          else if(checkuser[0].details.passWord!==checkpass){
            this.setState({
                exception:<div>
                    <h4 style={{color:"white"}}>Invalid Credentials</h4>
                </div>,
                userName:"",
                passWord:""
            })
          }
          else{
            this.props.showModal();
            localStorage.setItem("currentUser",this.state.userName);
            this.setState({
                userName:"",
                passWord:"",
                exception:""
            })
          }
   }

    render() {
      
        return (
            
            <div style={{display : (this.props.show ? "block" : "none")}}>
                <div id="signin_modal" >
               
                <div id="signin_part">
               
                <div className="signup_details">
                <span id="close_modal" onClick={()=>this.props.showModal()}> X</span>
                    <h2 className="text_color">User Details:</h2>
                     <h4 className="text_color" >Username</h4>
                     <input id="user_name" className="inp_class signup_inp" name="userName" onChange={(event)=>this.handleChange(event)} value={this.state.userName} required/>
                     <h4 className="text_color">Password</h4>
                     <input type="password" id="pwd" className="inp_class signup_inp" name="passWord" onChange={(event)=>this.handleChange(event)} value={this.state.passWord}  required/>
                     <br/>
                    <div className="both_btn" style={{marginTop:"20px"}}>
                        {this.state.exception}
                       <button className="lib_btn sign_btn" onClick={()=>this.checkUser()}>Sign-In</button>
                    </div>
                </div>

            </div>
            </div>
            
            </div>
        )
    }
}
