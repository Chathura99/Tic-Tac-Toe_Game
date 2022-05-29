import { SquareValue } from "../../types/types";
import NextPlayer from "./NextPlayer";
import "./moves.css";

type moveProps = {
    history: SquareValue[][] | null;
    nextPlayer: String
    timeTravel: (value: number) => void
    winner: String | null
}
const Moves: React.FC<moveProps> = (props) => {
    return (
        <div>
            {
                props.winner ? <h2> {props.winner} You Won !</h2> :
                    <div>
                        <NextPlayer nextPlayer={props.nextPlayer} />
                        {/* <h3>Moves</h3> */}
                        <ol>
                            <li onClick={() => props.timeTravel(-1)}>Go to game start</li>
                            {/* conditional rendering */}

                            {
                                props.history?.map((item, index) => {
                                    if (index == 0) return
                                    return <li key={index} onClick={() => props.timeTravel(index)}>Go to #{index}</li>
                                })
                            }

                        </ol>
                    </div>
            }
        </div>

    );
};

export default Moves;