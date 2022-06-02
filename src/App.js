import { useEffect, useState } from "react";
import Grid from "./Components/Grid";
import useWordle from "./Hooks/useWordle"


function App() {
  const [solution,setSolution] = useState(null)
  const {isCorrect,currentGuess,guesses,turns, handleKeyPress} = useWordle(solution)

  useEffect(() =>{
    fetch("http://localhost:3001/solution")
      .then(response =>{
        if(response.ok){
          return response.json()
        }
        throw new Error("Wrong URI")
      })
      .then(data =>{
        // select a random number between 0 and 6 and then select a random word
        const randomInt = Math.floor((Math.random() * data.length ))
        const randomWord = data[randomInt].word
        setSolution(randomWord)
      })
      .catch(error => console.log(error))
  },[setSolution])

  useEffect(() =>{
    window.addEventListener('keyup',handleKeyPress)
    return (() =>{
      window.removeEventListener("keyup",handleKeyPress)
    })
  })

  useEffect(() =>{
    console.log(guesses)
  },[guesses])

  return (
    <div className="App">
      <div className="container">
        <h1>Wordle (lingo) </h1>
        <Grid currentGuess = {currentGuess} guesses ={guesses} turns= {turns} />
      </div>
    </div>
  );
}

export default App
