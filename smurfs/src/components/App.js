import React from "react";
import "./App.css";
import {connect} from 'react-redux'
import {getSmurfs} from '../actions'

function App(props) {

  
    return (
      <div className="App">
        <h1>Smurfs</h1>
        {props.loading && <div>loading...</div>  }
        {props.smurfs && (
          <div>
           { console.log('data', props.smurfs)}
            {props.smurfs.map(smurf => {
return <p>Name: {smurf.name} | Age: {smurf.age} | Height: {smurf.height}</p> 
            })}

          </div>)}
          
        <button onClick={props.getSmurfs} >Get Smurf List</button>
      </div>
    );
  }


const mapStateToProps = state => {
  console.log (state.smurfs)
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
