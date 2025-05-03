import React from 'react';
import { goNext,goPrev } from '../reducer/formReducer';

function Step3({state,dispatch}){
    const handleChange=(e)=>{
        dispatch({
            type:'UPDATE_FIELD',
            field:e.target.name,
            value:e.target.value
        })
    };

    return(
        <div className="step">
            <h2>Preferences(Optional)</h2>
            <label>Preferences:
                <textarea 
                    name="preferences"
                    rows='4'
                    cols='50'
                    value={state.formData.preferences}
                    onChange={handleChange}
                    placeholder='Tell us more about your preferences...'
                    >
                </textarea>
            </label>
            <br />
            <button onClick={()=>goPrev(dispatch)}>Back</button>
            <button onClick={()=>goNext(()=>true,dispatch)}>Next</button>
        </div>
    );
}

export default Step3;
