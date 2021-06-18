const GameCards = ({games}) => {
  
  return ( 
    <div className="game-cards">
          {games.map((game) => (
          <div className="game-preview" key={ game.id }>
            <div className="card">
              <img src={game.img} alt="" />
              <div>{game.title}</div>
              <div>{game.body}</div>
            </div>
          </div>
            ))}
    </div>
   );
}
 
export default GameCards;