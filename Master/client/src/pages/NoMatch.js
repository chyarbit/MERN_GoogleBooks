// require dependencies 
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

// function called NoMatch will return an error if no match for the book can be found
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          {/* use Jumbotron component*/}
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// export as NoMatch
export default NoMatch;
