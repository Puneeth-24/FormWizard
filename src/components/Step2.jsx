import React, { useState } from 'react';
import { goNext,goPrev } from '../reducer/formReducer';

function Step2({state,dispatch}){

    const [error,setError]=useState({})
    const handleChange=(e)=>{
        dispatch({
            type:'UPDATE_FIELD',
            field:e.target.name,
            value:e.target.value
        });
    }

    const validate=()=>{
        const newError={}
        if(!state.formData.address.trim()) newError.address="Address is required";
        if(!state.formData.city.trim()) newError.city="City is required";
        setError(newError);

        return Object.keys(newError).length===0;
    }


    return(
        <div className="step">
            <h2>Step 2 : Address Information</h2>
            <label >Address:
                <textarea 
                    type="text"
                    name='address'
                    value={state.formData.address}
                    onChange={handleChange}
                    rows='3'
                    cols='50'
                    style={{display:'block'}}
                ></textarea>
            </label>
            {error.address && <p className='error'>{error.address}</p>}
            <br />
            <label >City:
                <input 
                    type="text"
                    name='city'
                    value={state.formData.city}
                    onChange={handleChange}
                />
            </label>
            {error.city && <p className='error'>{error.city}</p>}
            <button onClick={()=>goPrev(dispatch)}>Back</button>
            <button onClick={()=>goNext(validate,dispatch)}>Next</button>
        </div>
    );
}

export default Step2;