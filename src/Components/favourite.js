import React, { Component } from 'react'

export default class favourite extends Component {

    constructor(props){
        super(props);
        this.state={
            fav:[]
        }
    }

    componentDidMount(){
        var array=JSON.parse( localStorage.getItem("FAV"));
        this.setState({fav:array});

    }
    render() {
        return (
            <div>
                {console.log(this.state.fav)}
                {this.props.a(this.state.fav)}
            </div>
        )
    }
}
