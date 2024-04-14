import React, { Fragment,Component} from 'react';
import './Header.css'

// function Header(){
//     return(
//         <React.Fragment>
//             <hr/>
//             <center><h2>Developer funnel</h2></center>
//         </React.Fragment>
//     )
// }
// export default Header;



// class header extends React.Component{
   // render( ){
        // const myStyle={
        //     header:{
        //         backgroundColor:'tomato'
        //     },
        //     logo:{
        //         fontSize:'30px',
        //         color:'white',
        //         textAlign:'center' ,
        //  }
        // }
//         return(
//             <Fragment>
//                 <header style={myStyle.header}>
//                     <div style={myStyle.logo}>Developer Funnel</div>
//                     <center>
//                         <input/>
//                         <div style={{color:'red',fontSize:'20px'}}>User Input here</div>
//                     </center>
//                 </header>
//             </Fragment>

//         )
//     }
// }
// export default header


class header extends Component{

    constructor(){
        super()
        this.state ={
            title:'React Developer',
            keywords:"User text here"
        }
    }

    handleChange =(event) =>{
        console.log(event.target.value)
        this.setState({keywords:event.target.value?event.target.value:"User text here"})
        this.props.userInput(event.target.value)
    }
    render( ){
        return(
            <Fragment>
                <header>
                    <div className='logo' >{this.state.title}</div>
                    <center>
                        <input onChange= {this.handleChange}/>
                        <div style={{color:'red',fontSize:'20px'}}>{this.state.keywords}</div>
                    </center>
                </header>
            </Fragment>

        )
    }
}
export default header