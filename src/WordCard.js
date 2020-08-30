import React, { useState } from 'react';
import _  from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let number = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(number))
    return {
        number,
        chars,
        attempt: 1,
        guess: '',  
        completed: false
    }       
}

export default function Wordcard(prons){
   
    const [state, setState] = useState(prepareStateFromWord(prons.value))
    const activationHandler = c => 
    { 
        console.log(`${c} has been activated.`) 
        
        let guess = state.guess+c;
        setState({...state,guess})

        //choose only 2 even numbers
       if(guess.length == 2){
            if(guess%2==0){
                alert("You Win!!");
                setState({...state, guess: '', completed: true});
                window.location.reload(false);
            }else{
                alert("You lose!!");
                setState({...state, guess: '', attempt: state.attempt + 1})
                }
            }  
    }
   
    return(
    <div>
        <div>
            Your Ans:{state.guess}
        </div>
       {
          state.chars.map((c,i)=>
         <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
         )
      }
    </div>
    )
}