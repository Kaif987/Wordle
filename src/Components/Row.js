const Row = ({guess,currentGuess}) => {

    if(currentGuess){
        const currentGuessArray = currentGuess.split("")
        return(
            <div className="row">
                {currentGuessArray.map((l,i) =>{
                    return <div key={i} >{l}</div>
                })}
                {[...Array(5 - currentGuess.length)].map((l,i) =>{
                    return <div key={i}></div>
                })}
            </div>
        )
    }

    if(guess){
        return(
            <div className="row">
                {guess.map((obj,i) =>{
                    return <div key = {i} className={obj.color}>{obj.letter}</div>
                })}
            </div>
        )
    }

    return ( 
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default Row;