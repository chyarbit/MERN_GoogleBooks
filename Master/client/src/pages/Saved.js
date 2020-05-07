// require dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// class component called Saved which extends the Component class in React
class Saved extends Component {
  // set initial set
  state = {
    books: []
  };

  // method componentDidMount will run method getSavedBooks when everything is loaded and ready
  componentDidMount() {
    this.getSavedBooks();
  }

  // method getSavedBooks to get all saved books
  getSavedBooks = () => {
    // call API to get getSavedBooks method
    API.getSavedBooks()
      // when successful, will set the state for key books with response data
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // if unsuccessful, will log an error
      .catch(err => console.log(err));
  };

  // method handleBookDelete to delete a specific book basd on the book id
  handleBookDelete = id => {
    // call API to get deleteBook method and delete book with the specific id that was passed in
    API.deleteBook(id)
    // after deletion, will run getSavedBooks to get the updated list of saved books
    .then(res => this.getSavedBooks());
  };

  // render 
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            {/* use Jumbotron component*/}
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/* use Card component*/}
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                {/* use List component*/}
                <List>
                  {this.state.books.map(book => (
                    {/* use Book component*/}
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export as Saved
export default Saved;
