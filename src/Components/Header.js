import React, { Component } from 'react'
import "./Components.css";
import SignupModal from  "./signupModal";
import SigninModal from  "./signinModal";
import {BrowserRouter as Router,Route,Link,withRouter} from "react-router-dom";
class Header extends Component {
       constructor(props){
           super(props);
           this.state={
             show:false,
             show1:false,
             
           }
       }
        showModal = e => {
            var temp = this.state.show;
            this.setState({
              show: !temp
            });
          };
          show1Modal = e => {
            var temp = this.state.show1;
            this.setState({
              show1: !temp
            });
          };
          signOut(){
              localStorage.removeItem("currentUser");
              this.props.history.push("/");
               this.forceUpdate();
          }
    render() {
    
        let user=localStorage.getItem("currentUser");
        let userDetails=JSON.parse(localStorage.getItem(user));
        return (
            <div>
                    <div >
                        <h1 id="headerId">IMDb Movies
                        { user&&userDetails===null?
                           <div style={{marginLeft:"60%"}}>
                            <button id="signin_id" style={{marginLeft:"70%"}} onClick={()=>this.showModal()}>Sign-In</button>
                            <button   onClick={()=>this.show1Modal()}>Sign-Up</button>
                        </div>:<div >
                        <Link to="/"><button style={{marginLeft:"40%"}}>Home</button></Link>
                        <Link to="/favourites"><button>Favorites</button></Link>
                        <Link to="/wishlist"><button>Wishlist</button></Link>
                        <p style={{fontSize:"15px",marginLeft:"85%"}}>Welcome {user}</p>
                        <button style={{fontSize:"15px",marginLeft:"90%"}} onClick={()=>this.signOut()}>Sign Out</button>
                            </div>
                        }
                        </h1>
                    </div>
                    {user!==null?<div>
                        
                        </div>:<div></div>}
                <SigninModal show={this.state.show} showModal={this.showModal}/>
                <SignupModal show1={this.state.show1} show1Modal={this.show1Modal}/>
            </div>
        )
    }
}
export default withRouter(Header);