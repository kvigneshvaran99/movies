import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/footer";
import Favourite from "./Components/favourite";
import Wishlist from "./Components/wishlist";
import ImportApi from "./Components/importAPI";
import PrivateRoute from "./Components/PrivateRoute";
import {BrowserRouter as Router,Route,Link, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
       <div>
         <Switch>
                <Route exact path="/" component={ImportApi} />
                <PrivateRoute path="/favourites" component={Favourite} />
                <PrivateRoute path="/wishlist" component={Wishlist} />
         </Switch>
         </div>
     </Router>
     
    <Footer/>
    
    </div>
  );
}

export default App;

