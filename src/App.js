import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word =  "Hello";
function App() {
  var number =""; //random 2 number
  var  ran=Math.floor(Math.random()*2);
  if(ran==0){
    number="12345";
  }
  else if(ran==1){
    number="67890";
  }
 
  return (
    //add className "Appst"
    //add game's name
    <body>
    <div className='Appst'> 
      <h1>EVEN NUMBER ONLY OK?</h1>
      <h2>please select an even number(2 number)</h2>
      <Wordcard value={number}/>
   
    </div>
    </body>
  );
}

export default App;
