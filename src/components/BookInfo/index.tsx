import React from "react";
import Book from "../../contracts/models/Book";
import { Container } from "./styles";

// import { Container } from './styles';

const BookInfo: React.FC<Book> = (props) => {
  return (
    <Container>
      <p>Titulo {props.Title}</p>

      <p>{props.Description}</p>

      {!!props?.Authors?.length && (
        <p>
          Autor(es){" "}
          {props.Authors.map(
            (author) => `${author.FirstName} ${author.LastName}`
          ).join(", ")}
        </p>
      )}
    </Container>
  );
};

export default BookInfo;
