import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Display from './ProductManager'
import JSON from './db.json'

class home extends Component {
    constructor(props){
        super(props)
        this.state ={
            products:JSON,
            filtered:JSON
        }
    }
    filterProduct =(userText) =>{
         let output =this.state.products.filter((item) =>{
           return item.name.toLowerCase().indexOf(userText.toLowerCase()) >-1
        })
        this.setState({filtered:output})

    }
    render(){
        return(

            <>
               <Header userInput ={(data) => {this.filterProduct(data)}}/>
               <Display  prodData={this.state.filtered}/>
               <Footer year="2024"/>
            </>
            )
    }


    }
export default home;