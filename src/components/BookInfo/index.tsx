import React from "react";
import Book from "../../contracts/models/Book";
import { Container } from "./styles";

/**
 * Um componentes são partes do sistema que você sabe que terá reutilização. Nele você é capaz de passar propriedades que definirão o conteúdo, lógica e ação do mesmo. Esses atributos aceitam qualquer coisa que você quiser atribuir a eles desde que seja válido para o Javascript.
 * 
 * Nesse caso criamos um componente de informações de um livro. Como eu sei que teremos que mostrar vários livros, a melhor coisa é extrair essa lógica para um componente, pois assim o código fica mais enxuto, encapsulado e fácil de enteder.
 */
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
