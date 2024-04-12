
import React from 'react';
import './product.css';
function Display(props){

        console.log("product output>>>",props )
        const renderProduct =props.prodData.map((data) =>{
            return(
                <div className="card">
                    <img src={data.image} alt={data.name}/>
                    <hr/>
                    <div>
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <p>Rs.{data.cost}</p>
                    </div>

                </div>

            )
        })
        return(
            <>
            <div className="main">
                {renderProduct}
            </div>
            </>
        )
    }

export default Display;