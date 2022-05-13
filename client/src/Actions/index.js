import axios from 'axios';


export function getDogs(){
    return function(dispatch){
        return fetch('http://localhost:3001/dogs')
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type: 'GET_DOGS',
                payload: data,
            })
        })
    }
}

export function getTemperaments(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/temperament");
        return dispatch({
            type:"GET_TEMPERAMENTS",
            payload: json.data,
        })
    }
}

export function getName(name){
    return async function (dispatch){

        const json = await axios.get('http://localhost:3001/dogs?name='+ name);
        return dispatch({
            type:"GET_NAME",
            payload: json.data,
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/dogs/'+id)
        return dispatch({
            type:"GET_DETAIL",
            payload: json.data,
        })
    }
}  

export function sortName(payload){
    return {
        type:"SORT_NAME",
        payload,
    }
}

export function filterTemperament(payload){
    return {
        type:"FILTER_TEMPERAMENT",
        payload,
    }
}

export function filterExistingBreed(payload){
    return {
        type:"FILTER_EXISTING_BREED",
        payload,
    }
}
export function sortWeight(payload){
    return {
        type:"SORT_WEIGHT",
        payload,
    }
}


export function postDogs(payload){
    return async function(){
        const create= await axios.post('http://localhost:3001/dog',payload);
        return create;
    }
}

export function resState(){
    return {
        type:"RES_STATE",
    }
}