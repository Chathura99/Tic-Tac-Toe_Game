import { useEffect, useState } from "react";
import { SquareValue } from "../../types/types";
import Board from "../Board/Board";
import Moves from "../Moves/Moves";

const Game: React.FC = () => {

    const [currentGame, setCurrentGame] = useState<SquareValue[]>(Array(9).fill(null))
    //find who is next player
    const [nextPlayer, setNextPlayer] = useState("X");
    //save game history(2D array):(default null)
    const [history, setHistory] = useState<SquareValue[][] | null>(null);
    //view winner
    const [winner, setWinner] = useState<String | null>(null);
    
    const SquareClick = (value: number) => {
        console.log("from parent(Board called) : value " + value);
        // console.log(currentGame[value]);
        if (currentGame[value] != null) return;
        //for good practice
        let temp = currentGame.slice();
        //change array var to new var

        // temp[value]= nextPlayer == "X" ? "O" : "X";

        if (nextPlayer === "X") {
            temp[value] = "X";
            setNextPlayer("O");
        } else {
            temp[value] = "O";
            setNextPlayer("X");
        }

        setCurrentGame(temp);

    }

    //Another way useEffect

    // useEffect(()=>{
    //     let historyTemp = history? history?.slice() : [];
    //     historyTemp?.push(currentGame);
    //     setHistory(historyTemp);
    // },[currentGame])

    // useEffect(()=>{
    //     console.log(history);
    // },[history])

    const TimeTravelhandler = (value: number) => {
        if (!history) return;
        let temp = history[value];
        let historyTemp = history.slice(0, value);

        if (value == -1) {
            setCurrentGame(Array(9).fill(null));
            setHistory([]);
        } else {
            setCurrentGame(history[value]);
            setHistory(historyTemp);
        }
    }

    useEffect(() => {
        let historyTemp = history ? history?.slice() : [];
        historyTemp?.push(currentGame);
        setHistory(historyTemp);
        setWinner(checkWinner());
    }, [currentGame])

    //check winner
    const checkWinner =()=>{
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (currentGame[a] && currentGame[a] === currentGame[b] && currentGame[a] === currentGame[c]) {
                console.log("Winner is : "+currentGame[a])
                return currentGame[a];
            }
          }
          return null;
    }
    return (
        <div>
            {/* give 2 props to board */}
            <Board squareClick={value => SquareClick(value)} currentGame={currentGame} />
            <Moves history={history} nextPlayer={nextPlayer} winner={winner} timeTravel={value => { TimeTravelhandler(value) }} />
        </div>

    );
};

export default Game;