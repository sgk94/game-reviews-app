import Banner from "./Banner";
import Categories from './Categories';
import GameCards from "./GameCards";
import useFetch from '../useFetch';

const Stack = () => {
  const {data: games, isPending, error} = useFetch('http://localhost:8000/games');
  return ( 
    <div className="stack">
      { error && <div>{error}</div> }
      { isPending && <div>Loading...</div> }
      <div className="stack-container">
        <Banner />
        {games && <GameCards games={games} />}
      </div>
    </div>
   );
}
 
export default Stack;