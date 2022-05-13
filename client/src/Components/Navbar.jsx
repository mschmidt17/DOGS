import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDogs, sortWeight, sortName, filterExistingBreed, filterTemperament, getTemperaments} from '../Actions/index.js';
import Search from './Search.jsx';
import "../CSS/NavBar.css"

export default function NavBar(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);

    useEffect( ()=> {
        dispatch(getTemperaments())
    },[dispatch])

    function handleOrdenar(e) {
        e.preventDefault();
        dispatch(sortName(e.target.value));
    }
    function handleOrdenarWeight(e) {
        e.preventDefault();
        dispatch(sortWeight(e.target.value));
    }
    const handlefilterExistingBreed= (e) => {
        e.preventDefault();
        dispatch(filterExistingBreed(e.target.value))
    }
    const allTemperaments= useSelector((e)=> e.temperament)
    const handleFilterTemperaments=(e)=>{
        dispatch(filterTemperament(e.target.value))
    }

  
    return(
        <div className='containerNav'>
            <div>
                <Search/>
            </div>
            
            <div className='filter'> 
                <select className="botonfiltro" onChange={e=> handleOrdenarWeight(e)}>
                    <option value='All'>By Weight</option>
                    <option value='small'> Light  </option>
                    <option value='big'> Heavy  </option>
                </select> 

                <select className="botonfiltro" onChange={e=> handleOrdenar(e)}>
                    <option value='All'>Alphabetically</option>
                    <option value='asc'> A a Z  </option>
                    <option value='desc'> Z a A  </option>
                </select> 

                <select className="botonfiltro" 
                    onChange={e=> handlefilterExistingBreed(e)}>
                        <option value="todo">all Existing Breed</option>
                        <option value="db" >Existing Breed DB</option>
                        <option value="api" >Existing Breed API</option> 
                </select>

                <select className="botonfiltro" onChange={e=> handleFilterTemperaments(e)}>
                    <option value="All">all Temperaments</option>
                    {allTemperaments && allTemperaments.map(e => (
                    <option key={e.id} value={e.name}> {e.name} </option>
                    ))}
                </select> 
            </div> 
        </div>
    )
};