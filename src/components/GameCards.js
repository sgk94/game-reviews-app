import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameCards = ({games}) => {
  
  return ( 
    <div className="game-cards">
      <div className="card-category">
        {games.map((game) => (
          <div className="card" key={ game.id } >
            <Link className="game-details-link" to={`/games/${game.id}`}>
              <div className="card-img" style={{ backgroundImage: `url(${game.img})`}}>
                <div className="card-content">
                  <div className="icons-container">
                    <div className="icons"><FontAwesomeIcon icon="plus" /></div>
                    <div className="icons"><FontAwesomeIcon icon="thumbs-up" /></div>
                    <div className="icons"><FontAwesomeIcon icon="thumbs-down" /></div>
                  </div>
                  <p>This is where review will go</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div> 
    </div>
   );
}
 
export default GameCards;