const GameCards = ({games}) => {
  
  return ( 
    <div className="game-cards">
      <div className="card-category">
        {games.map((game) => (
          <div className="card" key={ game.id } >
            <div className="card-img" style={{ backgroundImage: `url(${game.img})`}}>
              <div className="card-content">
                <h2 className="icons">Icons</h2>
                <p>This is where review will go</p>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
   );
}
 
export default GameCards;