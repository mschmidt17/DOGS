import React from 'react';
import {Link} from 'react-router-dom';
import "../CSS/LandingPage.css";


export default function LandingPage(){
    return (
      
        <div className='justificado'>

            <div>
                <h1 className='title'>Welcome!</h1>
                <Link to ='/home'>
                    <button className='boton'> Start </button>
                </Link>
            </div>
        </div>
    )
}