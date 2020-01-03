import React, { Component } from 'react'
import RenderComponent from './RenderComponents';
export default class favourite extends Component {

    constructor(props){
        super(props);
        this.state={
            wishlist:[]
        }
    }

    componentDidMount(){
        var username=localStorage.getItem("currentUser");
        var user=JSON.parse( localStorage.getItem(username));
        
        var array=user[2].WISHLIST;
        if(array!==null){
            this.setState({wishlist:array});
            }
            else{
                this.setState({wishlist:[]});
            }
    }
    render() {
        return (
            <div>
                <div style={{backgroundColor:"white"}}>
                <h1 id="title" style={{marginLeft:"20px"}}>Your Wishlist here:</h1>
                </div>
                {console.log(this.state.wishlist)}
                <RenderComponent val={this.state.wishlist}/>
            </div>
        )
    }
}
