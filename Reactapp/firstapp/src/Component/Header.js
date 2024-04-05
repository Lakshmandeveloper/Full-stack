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
    render( ){
        return(
            <Fragment>
                <header>
                    <div className='logo' >Developer Funnel</div>
                    <center>
                        <input/>
                        <div style={{color:'red',fontSize:'20px'}}>User Input here</div>
                    </center>
                </header>
            </Fragment>

        )
    }
}
export default header