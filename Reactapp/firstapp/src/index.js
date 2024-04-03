import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';

const App =() =>{
    return(

        <>
            <Header/>
            <h1> Hii from  React </h1>
            <h2>Test react </h2>
            <Footer/>
        </>
        )
}
ReactDom.render(<App/>,document.getElementById('root'))