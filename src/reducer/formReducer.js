export const initialState={
    step:0,
    formData:{
        name:'',
        email:'',
        address:'',
        city:'',
        preferences:''
    }
}

export function formReducer(state,action){
    switch(action.type){
        case 'UPDATE_FIELD':
            return {
                ...state,
                formData:{
                    ...state.formData,
                    [action.field]:action.value
                },
            };
        
        case 'NEXT_STEP':
            return {
                ...state,
                step:state.step+1
            };
        
        case 'PREV_STEP':
            return {
                ...state,
                step:state.step-1
            };
        case 'RESET':
            return initialState;
    }
}

export  function goNext(validate,dispatch){
    if(validate()){dispatch({type:'NEXT_STEP'});}
}

export function goPrev(dispatch){
    dispatch({type:'PREV_STEP'});
}