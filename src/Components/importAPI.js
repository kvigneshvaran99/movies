import React, { Component } from 'react'
import axios from 'axios';
import "./Components.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import RenderComponent from './RenderComponents';


export default class ImportAPI extends Component {
        constructor(props){
            super(props);
            this.state={
                info:[],
                url:"https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=",
                usersearch:"",
                usersearchcopy:"",
                totalPages:1,
                page:1,
                fav:[],
                wishlist:[]
            }
        }

handleChange = (event) =>{
 console.log(event.target.value , event.target.name)
this.setState({[event.target.name] : event.target.value})
 
     let{url,usersearch}=this.state;
    if(usersearch.length%3===0)
    {
     let newurl=url+usersearch;
     console.log(newurl) 
     axios.get(newurl)
     .then(res=>{
         console.log(res);
 
         res.data.results.sort(function(a, b){
            return b.popularity-a.popularity
        })
        console.log(res.data.results);
         this.setState({info:res.data.results})
         this.setState({page:1});
         this.setState({totalPages:res.data.total_pages})
     })}
 }

 search(){
     let{url,usersearch,info}=this.state;
     let newurl=url+usersearch;
     console.log(newurl) 
     this.setState({usersearchcopy:usersearch});
     this.setState({usersearch:""}) 
     console.log(this.props.s,"11111")

     axios.get(newurl)
     .then(res=>{
         
         res.data.results.sort(function(a, b){
            return b.popularity-a.popularity
        })
        
         this.setState({info:res.data.results})
         this.setState({page:1});
         this.setState({totalPages:res.data.total_pages})
     })
 }

componentDidMount(){    
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=batman")
         .then(res=>{
            res.data.results.sort(function(a, b){
                return b.popularity-a.popularity
            })
          
        this.setState({info:res.data.results})

    })
}

pageSwitch(switchPage)
{
   let{totalPages,page,url,usersearchcopy}=this.state;
   if(page<=totalPages&&page>=1)
   {
       if(switchPage===1)
       {
        if(page!==1){
           page--;
          }
          this.setState({page})
       }
       else
       {
           if(page!==totalPages)
           {
          page++;
           }
          this.setState({page});
       }
    }
    let newPage="&page="+page;
    let newurl=url+usersearchcopy+newPage;
    axios.get(newurl)
    .then(res=>{
        console.log(res);
        this.setState({info:res.data.results})
    })
}
pageRender()
{
    return(
        <div id="switchPage">
            
             <button id="prevBtn" onClick={()=>this.pageSwitch(1)}>Previous Page</button>
             <p id="pageCount"> [....Page:{this.state.page}..of..{this.state.totalPages}....]</p>
             <button onClick={()=>this.pageSwitch(2)}>Next Page</button>
             
        </div>
    )
}
norender()
{
    let{totalPages,info}=this.state;
    if(info.length===0)
    {
        return(
            <div id="noResult"><h2>No Results Found</h2></div>
        )
    }
}

render() {    
        console.log(this.state)
        
        return (
            <div>
                 
            <div id="content">
                 <h2 id="searchId2"><u><center><p></p>Page results:{this.state.info.length}</center></u></h2>
                 {this.pageRender()}
              

                <div id="searchBox">
                <p id="searchId">Search here:-</p><input id="searchInp" name="usersearch" onChange = {(event)=>this.handleChange(event) }value={this.state.usersearch}></input>
                <button onClick={()=>this.search()}>Submit</button>
                </div>
                <RenderComponent val={this.state.info} />

                </div>
                <div>
             
            </div>
            </div>
        )
    }
}
