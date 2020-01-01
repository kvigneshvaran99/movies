import React, { Component } from 'react'
import axios from 'axios';
import "./Components.css";
import Favorite from "./favourite";
import Wishlist from "./wishlist";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import SigninModal from  "./signinModal";

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
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=nan")
         .then(res=>{
             console.log(res.data.results);
            res.data.results.sort(function(a, b){
                return b.popularity-a.popularity
            })
          
        this.setState({info:res.data.results})

    })
}
favourite(key)
{
    let {info,fav}=this.state;
    if(fav.length===0&&(JSON.parse(localStorage.getItem("FAV"))==null))
    {  
        var obj=info[key];
       fav.push(obj);
       localStorage.setItem("FAV",JSON.stringify( fav));
       this.setState({fav});
    }
    else{  
        fav.push(info[key]);
        localStorage.setItem("FAV",JSON.stringify( fav));
        this.setState({fav});
    }
}
wishList(key)
{
    let {info,wishlist}=this.state;
    if(wishlist.length===0&&(JSON.parse(localStorage.getItem("WISHLIST"))==null)){
       var obj=info[key];
       wishlist.push(obj);
       localStorage.setItem("WISHLIST",JSON.stringify(wishlist));
       this.setState({wishlist});
    }
    else{  
        wishlist.push(info[key]);
        localStorage.setItem("WISHLIST",JSON.stringify(wishlist));
        this.setState({wishlist});
    }
}
renderAll(val)
{
    console.log(val);
    return(
       
        <div id="wholeBody">
            
        {val.map((singleObj,key)=>{
            let imgaddress;
            if(singleObj.poster_path!==null)
            {
            imgaddress="http://image.tmdb.org/t/p/w185/"+singleObj.poster_path;
            }
            else{
                imgaddress="https://s3.us-east-2.amazonaws.com/shdhs.org/2018/01/No-image-available.jpg";
            }
            return(
                <div id="singleBlock">
                    <br></br>
                    <center><img id="imgId" src={imgaddress}/>
                    <h3 id="title">{singleObj.original_title}</h3>
                    <h4>IMDb ratings:{singleObj.vote_average}</h4>
                    <h5>Release Date:{singleObj.release_date}</h5></center>
                    <p id="despId">{singleObj.overview}</p>
                   <button id={key} onClick={()=>this.favourite(key)} style={{marginLeft:"90px"}}> <img src="https://img.icons8.com/flat_round/64/000000/hearts.png" style={{height:"30px",width:"30px"}}></img></button>
                    <button id={key} onClick={()=>this.wishList(key)}><img src="https://img.icons8.com/color/48/000000/wish-list.png" style={{height:"30px",width:"30px"}}></img></button>
                    
            <p></p>
                </div>
            )
        })}

        </div>
    )
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
                <Router >
                <Link to="/"><button style={{marginLeft:"39%",marginBottom:"40px"}}>Home</button></Link>
                <Link to="/favourites"><button>Favorites</button></Link>
                <Link to="/wishlist"><button>Wishlist</button></Link>

                <Route path="/" exact render={()=>this.renderAll(this.state.info)} ></Route>
                <Route path="/favourites"><Favorite a={this.renderAll}/></Route>
                <Route path="/wishlist"><Wishlist b={this.renderAll}/></Route>
                </Router>

                </div>
                <div>
                
              
                
                <SigninModal/>

            </div>
            </div>
        )
    }
}
