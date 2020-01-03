import React, { Component } from 'react';
import RenderComponent from './RenderComponents';


export default class favourite extends Component {

    constructor(props){
        super(props);
        this.state={
            fav:[]
        }
    }

    componentDidMount(){
        var username=localStorage.getItem("currentUser");
        var user=JSON.parse( localStorage.getItem(username));
        
        var array=user[1].FAV;
        if(array!==null){
            this.setState({fav:array});
            }
            else{
                this.setState({fav:[]});
            }
    }

    render() {
        return (
            <div>
                <div style={{backgroundColor:"white"}}>
                <h1 id="title" style={{marginLeft:"20px"}}>Your Favourites here:</h1>
                </div>
                {console.log(this.state.fav)}
                <RenderComponent val={this.state.fav}/>
            </div>
        )
    }
}
