import Banner from './Banner';
import Categories from './Categories';
import useFetch from '../useFetch';
import GameCards from './GameCards';

const Home = () => {
  const {data: games, isPending, error} = useFetch('http://localhost:8000/games');
  return ( 
    <div className="home">
      { error && <div>{error}</div> }
      { isPending && <div>Loading...</div> }
      <Banner />
      <Categories />
      {games && <GameCards games={games} />}
    </div>
   );
}
 
export default Home;