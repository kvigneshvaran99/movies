import React, { Component } from 'react'

export default class RenderComponent extends Component{
favourite(key)
{
     var username=localStorage.getItem("currentUser");
    var user=JSON.parse( localStorage.getItem(username));
    
    user[1].FAV.push(this.props.val[key]);
   localStorage.setItem(username,JSON.stringify(user));
   
}
wishList(key)
{
    var username=localStorage.getItem("currentUser");
    var user=JSON.parse( localStorage.getItem(username));
  
    user[2].WISHLIST.push(this.props.val[key]);
localStorage.setItem(username,JSON.stringify(user));
}

 render(){
  
    var user=localStorage.getItem("currentUser");
    return(
       
        <div id="wholeBody">
            
        {this.props.val.map((singleObj,key)=>{
            console.log(key);
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
                    {user!==null?<div>
                        <button id={key} onClick={()=>this.favourite(key)} style={{marginLeft:"90px",marginBottom:"10px"}}> <img src="https://img.icons8.com/flat_round/64/000000/hearts.png" style={{height:"30px",width:"30px"}}></img></button>
                    <button id={key} onClick={()=>this.wishList(key)} style={{marginBottom:"10px"}}><img src="https://img.icons8.com/color/48/000000/wish-list.png" style={{height:"30px",width:"30px"}}></img></button>
                    </div>:<div></div>}

                    
            <p></p>
                </div>
            )
        })}

        </div>
    )}
}

