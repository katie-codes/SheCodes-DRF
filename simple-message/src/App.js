import React from 'react';
import './App.css';

// function name
function App() {

  // declare any variables
  // const message = "Javascript is cool" hardcoded
  const [message, setMessage] = React.useState("Initial state");
  


// then you can add new functions here
function handleClick() {
  setMessage("new message updated state")
}



  // return the stuff that is to be rendered on the screen
  // template
  return (
    <div>
<h1 className="h1">{message}</h1>
<button onClick={handleClick}>I am a button that will update state</button>
</div>
  );
}

export default App;
