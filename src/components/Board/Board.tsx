import { useState } from "react";
import { SquareValue } from "../../types/types";
import Square from "../Square/Square";
import "./board.css";

type BoardProps = {
    currentGame : SquareValue[]
    squareClick : (value:number)=>void
}

const Board: React.FC<BoardProps> = (props) => {

    const renderSquare = (value:number) =>{
        // call from child(square)
        return <Square clickSquareHandler={()=>{props.squareClick(value)}} value={props.currentGame[value]} />
    }

    
    return (
        <div className="board">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            
            {/* <div><h1>x is {x}</h1>
            <button onClick={incrementX}>+</button>
            </div> */}
        </div>
    );
};

export default Board;