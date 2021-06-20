import { useParams } from 'react-router';
import useFetch from '../useFetch';
// import { useHistory } from "react-router-dom";

const GameCardDetails = () => {
const { id } = useParams();
const { data: game, error, isPending } = useFetch('http://localhost:8000/games/' + id);
// const history = useHistory();

  return ( 
    <div className="game-card-details">
      { isPending && <div>Loading...</div> }
      { error && <div> { error }</div> }
      { game && (
        <article>
          <h2>{ game.title }</h2>
          <div>{ game.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default GameCardDetails;