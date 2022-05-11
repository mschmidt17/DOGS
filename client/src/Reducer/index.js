const inicialState = { 
    dogs :[],
    temperament:[],
    detail:[],
    allDogs:[]
}

function rootReducer(state= inicialState, action){
    
    switch(action.type){
        case 'GET_DOGS':
            return{
                ...state,
                dogs:action.payload,
                allDogs: action.payload,
               
            }
        case 'GET_TEMPERAMENTS':
            
            return{
                ...state,
                temperament: action.payload 
            }
        case 'GET_NAME':
            
            return{
                ...state,
                dogs: action.payload
            }
        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        case 'SORT_NAME':           

            if( action.payload === 'desc'){
            return {
                ...state,
                dogs: [...state.dogs].sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1)),
                }
            } 
            return{
                ...state,
                dogs: [...state.dogs].sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)),

                }
               
        case 'FILTER_TEMPERAMENT':
            const allBreeds = state.allDogs;
            const filterTemperament = action.payload === "All" ? allBreeds : allBreeds.filter (e => {
                if(e.temperament){
                    if( e.temperament.includes(action.payload)){
                        return e
                    }
            }
            return false;
            })
            return{
                ...state,
                dogs: filterTemperament,
            }
        case "FILTER_EXISTING_BREED":
            
            if(action.payload === "todo"){
            
                return { 
                    ...state,
                    dogs: [...state.allDogs],
                    
                }
            }else if( action.payload === "db"){

             return { 
                ...state,
                 dogs : state.allDogs.filter((breed)=> breed.createdInBd === true),
                    }
            }else{
                return { 
                    ...state,
                     dogs : state.allDogs.filter((breed)=> breed.createdInBd === undefined),
                    }
            }

        case 'SORT_WEIGHT':
            if( action.payload === 'All'){
                return {
                    ...state,
                    allDogs: [...state.allDogs],
                    dogs: [...state.dogs],
                }
            }
            if( action.payload === 'small'){
                
                return{
                    ...state,
                    
                    allDogs: [...state.allDogs].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.split('-')[0]);
                        let pesoB= parseInt(b.weight.split('-')[0]);
                       
                        if(pesoA > pesoB) return 1;
                        if(pesoA < pesoB) return -1;
                        else return 0;   
                    }),
                    dogs: [...state.dogs].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.split('-')[0]);
                        let pesoB= parseInt(b.weight.split('-')[0]);
                            
                        
                        if(pesoA > pesoB) return 1;
                        if(pesoA < pesoB) return -1;
                        else return 0;
                    })
                }
            }
            
                if( action.payload === 'big'){
                    
                return {
                    allDogs: [...state.allDogs].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.split('-')[0]);
                        let pesoB= parseInt(b.weight.split('-')[0]);
                           
                        if(pesoA < pesoB) return 1;
                        if(pesoA > pesoB) return -1;
                        else return 0;   
                    }),
                    dogs: [...state.dogs].sort((a, b) =>{
                        let pesoA= parseInt(a.weight.split('-')[0]);
                        let pesoB= parseInt(b.weight.split('-')[0]);

                        if(pesoA < pesoB) return 1;
                        if(pesoA > pesoB) return -1;
                        else return 0;   
                    })
                }
                };
                break;
        case 'RES_STATE':
            return{
                ...state,
                detail: []
            }
            
            default:
                return state;
    }

}

export default rootReducer;