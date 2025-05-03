import React from "react";
import { goPrev } from "../reducer/formReducer";

function Review({state,dispatch}){
    const {name,email,address,city,preferences}=state.formData;

    const handleSubmit=()=>{
        alert("Form successfully submitted");
        dispatch({type:'RESET'})
    }

    return(
        <div className="step">
            <h2>Review Your Information</h2>
            <ul>
                <li><strong>Name: </strong>{name}</li>
                <li><strong>Email: </strong>{email}</li>
                <li><strong>Address: </strong>{address}</li>
                <li><strong>City: </strong>{city}</li>
                {state.formData.preferences && <li><strong>Preferences: </strong>{preferences}</li>}
            </ul>
            <br />
            <button onClick={()=>goPrev(dispatch)}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Review;