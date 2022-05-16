type nextPlayerProps = {
    nextPlayer :String
}
const NextPlayer:React.FC<nextPlayerProps> = (props) => {
    return (
        <div>
            <h3>Next Player : {props.nextPlayer}</h3>
        </div>
    );
};

export default NextPlayer;