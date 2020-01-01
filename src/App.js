import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/footer";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Header/>
    <Footer/>
    
    </div>
  );
}

export default App;

