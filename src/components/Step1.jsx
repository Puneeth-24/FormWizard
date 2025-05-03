import React,{useState} from 'react';
import {goNext} from '../reducer/formReducer';
function Step1({state,dispatch}){

    const [error,setError]=useState({});
    const handleChange=e=>{
        dispatch({
            type:'UPDATE_FIELD',
            field:e.target.name,
            value:e.target.value
        })
    }

    const validate=()=>{
        const newError={}
        if(!state.formData.name.trim()) newError.name="Name is required";
        if(!state.formData.email.trim()) newError.email="Email is required";
        else if (!/\S+@\S+\.\S+/.test(state.formData.email)) newError.email="Email is invalid";
        setError(newError);

        return Object.keys(newError).length===0;
    }
    
    return(
        <div className="step">
            <h2>Basic Information</h2>
            <label>Name: 
                <input 
                    type="text" 
                    name='name'
                    value={state.formData.name}
                    onChange={handleChange}
                />
            </label>
            {error.name && <p className='error'>{error.name}</p>}
            <br />
            <label>Email:
                <input 
                    type="text" 
                    name='email'
                    value={state.formData.email}
                    onChange={handleChange}
                />
            </label>
            {error.email && <p className='error'>{error.email}</p>}
            <button onClick={()=>goNext(validate,dispatch)}>Next</button>
        </div>
    );
}

export default Step1;