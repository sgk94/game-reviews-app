import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const GameCards = ({games}) => {
  
  return ( 
    <div className="game-cards">
      <Container>
        <Row>
          {games.map((game) => (
          <div className="game-preview" key={ game.id }>
            <Col>
              <Card>
                <Card.Img></Card.Img>
                  <Card.Header as="h5">{game.title}</Card.Header>
                  <Card.Body>
                  <Card.Text>{game.body}</Card.Text>
                  </Card.Body>
              </Card>
            </Col>
          </div>
            ))}
        </Row>
      </Container>
     
    </div>
   );
}
 
export default GameCards;