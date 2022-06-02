import Row from "./Row"

// guesses is an array of items which are array of objects with letter and color property 
const Grid = ({currentGuess,guesses,turns}) => {
    return ( 
        <div className="grid">
            {guesses.map((guess,i) =>{
                // i want to pass row with current guess prop only if turn matches the index of guesses array 
                if(i === turns){
                    return <Row key={i} currentGuess = {currentGuess} />
                } 
                return <Row key={i} guess = {guess} />
            })}
        </div>
     );
}
 
export default Grid;