import React,{useReducer} from 'react';
import {formReducer,initialState} from './reducer/formReducer'
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Review from './components/Review';
import './styles/App.css'


function ProgressBar({ step, totalSteps }) {
    const progress = ((step) / (totalSteps - 1)) * 100;
  
    return (
      <div className="progress-wrapper">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <div className="progress-steps">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`step-dot ${index <= step ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  

function App(){
    const[state,dispatch] = useReducer(formReducer,initialState);

    const steps=[
        <Step1 state={state} dispatch={dispatch}/>,
        <Step2 state={state} dispatch={dispatch}/>,
        <Step3 state={state} dispatch={dispatch}/>,
        <Review state={state} dispatch={dispatch}/>
        
    ];


    return(
        <div className="app">
            <h1>Multi-Step Form</h1>
            <ProgressBar step={state.step} totalSteps={steps.length}/>
            {steps[state.step]}
        </div>
    );
}


export default App;