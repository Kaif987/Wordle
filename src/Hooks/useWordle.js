import { useState } from "react"

const useWordle = (solution) =>{
    const [currentGuess,setCurrentGuess] = useState("")
    const [guesses,setGuesses] = useState([...Array(6)])
    const [history,setHistory] = useState('')
    const [turns,setTurns] = useState(0)
    const [isCorrect,setIsCorrect] = useState(false)

    function formatGuess(){
        const solutionArray = [...solution]
        const formattedGuess = [...currentGuess].map((l) =>{
            return {letter: l,color: "grey"}
        })

        formattedGuess.map((object ,i) =>{
            if(solutionArray[i] === object.letter){
                object.color =  "green"
                solutionArray[i] = null
            }
            if(solutionArray.includes(object.letter) && object.color !=="green"){
                object.color = "yellow"
                solutionArray[solutionArray.indexOf(object.letter)] = null
            }
        })
        return formattedGuess
    }


    function addGuess(formattedGuess){
        if(currentGuess === solution){
            setIsCorrect(true)            
        }

        setGuesses(prevGuesses => {
            const newGuesses = [...prevGuesses]
            newGuesses[turns] = formattedGuess
            return newGuesses
        })

        setTurns(prevTurns => {
            return prevTurns + 1
        })    

        setHistory(prevHistory => ([...prevHistory,currentGuess]))
        setCurrentGuess("")        
    }

    function handleKeyPress({key}){
        if(/^[a-zA-Z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess(prev => prev + key)
            }
        }

        if(key === "Backspace"){
            setCurrentGuess(prev => prev.slice(0,-1))
        }
        
        if(key === "Enter"){
            if(currentGuess.length !== 5){
                return 
            }
            if(history.includes(currentGuess)){
                return
            }
            const formatted = formatGuess()
            addGuess(formatted)
        }
    }

    return {isCorrect,currentGuess,guesses,turns,handleKeyPress}
}

export default useWordle