
import React,{useState} from 'react'
import "./style.css"


const App = ()=>{

    // let score = 0
    // score = score + 5     //WE should never do this in REACT JS
    let [score, setScore] = useState(0)
    


    return(
        <div>
             <h1>Hey this is My Counter Application</h1>
             <h3>Value of Score is {score}</h3>
             <button onClick={()=>{setScore(score+1)}}> Increment </button>
             {/* Above This is Increase  */}
            <button onClick={()=>{setScore(score-1)}}> Decrement </button>
             {/* Above This is Decrease */}
             <button onClick={()=>{setScore(0)}}> Reset </button>
        </div>
    )
}

export default App 