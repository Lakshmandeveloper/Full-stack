import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Display from './ProductManager'
import JSON from './db.json'

class home extends Component {
    constructor(props){
        super(props)
        this.state ={
            products:JSON
        }
    }
    render(){
        return(

            <>
               <Header/>
               <Display  prodData={this.state.products}/>
               <Footer year="2024"/>
            </>
            )
    }

    }
export default home;