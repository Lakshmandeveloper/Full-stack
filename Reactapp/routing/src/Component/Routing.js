import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetail from './PostDetail';


const Routing = ( ) =>{
    return(

            <BrowserRouter>
            <Header/>
            <div className="container">
                <Route exact path="/" component ={Home}></Route>
                <Route exact path="/Post" component={Post}></Route>
                <Route exact path="/Post/:topic" component={PostDetail}></Route>
                <Route exact path="/Profile" component={Profile}></Route>
                </div>
            <Footer/>
            </BrowserRouter>
        )
}

export default Routing