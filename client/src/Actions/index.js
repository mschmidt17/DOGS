import axios from 'axios';


export function getDogs(){
    return function(dispatch){                       
        axios.get('/dogs')
        .then(dogs =>{
            dispatch({
                type: 'GET_DOGS',
                
                payload: dogs.data,
            })
        })
    }
}



export function getTemperaments(){
    return function (dispatch){
        axios.get("/temperament")
        .then(temp =>{
            dispatch({
                type: "GET_TEMPERAMENTS",
                payload: temp.data,
            })
        })
    }
}

export function getName(name){
    return async function (dispatch){
        const json = await axios.get('/dogs?name='+ name);
        return dispatch({
            type:"GET_NAME",
            payload: json.data,
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        const json = await axios.get('/dogs/'+id)
        return dispatch({
            type:"GET_DETAIL",
            payload: json.data,
        })
    }
}  

export function sortName(payload){                          //no son asincronas por eso no se necesita promesa ni async await
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
        const create= await axios.post('/dog',payload);
        return create;
    }
}

export function resState(){
    return {
        type:"RES_STATE",
    }
}