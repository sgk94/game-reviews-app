const GameCards = ({games}) => {
  
  return ( 
    <div className="game-cards">
          {games.map((game) => (
          <div className="game-preview" key={ game.id }>
            <div>{game.title}</div>
          </div>
            ))}
    </div>
   );
}
 
export default GameCards;