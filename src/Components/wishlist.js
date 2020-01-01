import React, { Component } from 'react'

export default class favourite extends Component {

    constructor(props){
        super(props);
        this.state={
            wishlist:[]
        }
    }

    componentDidMount(){
        var array1=JSON.parse( localStorage.getItem("WISHLIST"));
        this.setState({wishlist:array1});

    }
    render() {
        return (
            <div>
                {console.log(this.state.wishlist)}
                {this.props.b(this.state.wishlist)}
            </div>
        )
    }
}
