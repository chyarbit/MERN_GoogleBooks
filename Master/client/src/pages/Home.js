// require dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// class component called Home which extends the Component class from React
class Home extends Component {
  // set initial state
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  // method handleInputChange to handle the input change of the form
  handleInputChange = event => {
    // deconstruct name and value from event.target
    const { name, value } = event.target;
    // set state of key name with the value
    this.setState({
      [name]: value
    });
  };

  // method getBooks to get all the books
  getBooks = () => {
    // call API using getBooks method and passing in the query
    API.getBooks(this.state.q)
      // once successful, set state of key books with the response data
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // if unsuccessful, set state of key books to an empty array and display an error message
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  // method handleFormSubmit to handle the submit button click
  handleFormSubmit = event => {
    // prevents page refresh
    event.preventDefault();
    // run getBooks method
    this.getBooks();
  };

  // method handleBookSave to add a single book to the list of saved books based on the book id
  handleBookSave = id => {
    // create constant called books and set to the individual book id
    const book = this.state.books.find(book => book.id === id);
    // run API and saveBook method with the following key pairs
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
    // once successful, run getBooks method
    .then(() => this.getBooks());
  };

  // render home page
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
          <Col size="md-12">
            {/* use Card component*/}
            <Card title="Book Search" icon="far fa-book">
              {/* use Form component*/}
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/* use Card component*/}
            <Card title="Results">
              {this.state.books.length ? (
                // use List component
                <List>
                  {this.state.books.map(book => (
                    // use Book component
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export as Home
export default Home;
