import React from "react";
import "../CSS/Paginado.css";

export default function Paginado({dogsPage, allDogs, paginado}){
    const pageNumber=[];
    for (let i=0; i < Math.ceil(allDogs/dogsPage); i++){         //Te divide el total de los perros por la cantidad que se tiene q ver en la pag.
        pageNumber.push(i+1);
    }
    

    return (
        <div >
           <div className="paginado9">
            {pageNumber.length >1 && pageNumber.map((number)=> {
                return (
                    <ul key= {number}>
                        <button className="botonPaginado" onClick={()=> paginado(number)}>
                            {number}
                        </button>
                    </ul>
              
                )
            })}
            </div>
        </div>
    )
}