import { SquareValue } from "../../types/types";
//SquareValue = "X" | "O" | null
import "./square.css"

type SqureProps = {
    value: SquareValue
    clickSquareHandler:()=>void
}
const Square: React.FC<SqureProps> = (props) => {
    return (
        // call to parent(board)-clickSquareHandler
        <div className="square" onClick={props.clickSquareHandler}>
            {props.value}
        </div>
    );
};

export default Square;