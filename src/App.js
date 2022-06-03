import React, { useState, useEffect } from 'react';
import ListItem from "./ListItem";
import { getBooks } from './BooksService';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  padding: 10px;
`;

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, [])

  return (
    <Container>
      <ListContainer>
        {books.map(book => {
          return (
            <ListItem
              key={book.url}
              title={book.title}
              image={book.image}
              price={book.price}
              url={book.url}
            />
          )
        })}
      </ListContainer>
    </Container>
  );
}


export default App;