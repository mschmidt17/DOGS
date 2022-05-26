
import React from "react";
import "../CSS/Card.css"


/*export default function Card({image, name, temperament, weight}){
    return (
        <div className='paginado2'>
            <div className="card">  
                <h3 className="title3">{name}</h3>  
                <img className="imageCard" src={image} alt= "no encontrada"/>
                <p className="base11">Temperament :  {temperament}</p>
                <p className="base2">Weight: {weight}</p>
            </div>
        </div> 
    )
}*/





export default class Card extends React.Component {
    render() {
        return(
            <div className='paginado2'>
                <div>
                    <div className="card">  
                        <h3 className="title3">{this.props.name}</h3>  
                        <img className="imageCard" src={this.props.image} alt= "no encontrada"/>
                        <p className="base11">Temperament: {this.props.temperament}</p>
                        <p className="base2">Weight: {this.props.weight}</p>
                    </div>
                </div>
            </div> 
        )
    }
}