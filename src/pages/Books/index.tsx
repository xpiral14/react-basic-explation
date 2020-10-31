import React, { useEffect, useMemo, useState } from "react";
import BookInfo from "../../components/BookInfo";
import api from "../../config/api";
import Book from "../../contracts/models/Book";
import Author from "../../contracts/models/Author";

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);

  /**
   * Esse hook é capaz de tratar efeitos colaterais na nossa aplicação seja qual for ele, uma chamada a api, abrir uma modal, popup, enfim, o que quiser. Nesse caso ele está recebendo uma callback que cria uma função assíncrona e logo executa para poder obter os dados dos livros na api, o esquema de criar uma função assíncrona dentro dele foi utilizado pois o hook em si não aceita uma função assíncrona como parâmetro da callback, então precisamos criá-la e já executá-la
   */
  useEffect(() => {
    async function getBooks() {
      try {
        const response = await api.get("/Books");
        setBooks(response.data);
      } catch (err) {
        console.log("ERRO, nao foi possivel carregar");
      }
    }

    getBooks();
  }, []);

  /**
   *  Esse useEffect parece com o de cima, a diferença é que está fazendo uma chamada em outra rota da api simplesmente por questão de organização, a gente poderia fazer tudo em um só, mas existe um princípio que diz qwue uma função só pode fazer uma tarefa por questão de organização, modularização e lógica.
   */
  useEffect(() => {
    async function getAuthors() {
      try {
        const response = await api.get<Author[]>("/Authors");
        setAuthors(response.data);
      } catch (err) {
        console.log("nao deu foi mal");
      }
    }

    getAuthors();
  }, []);

  /**
   * Hook capaz de memorar um valor que seja pesado de ser calculado durante toda renderização, ele visa otimizar a performance durante cada rendrização do componente, pois essa constante só vai ter novamente um valor atribuido caso uma das dependências (o segundo parâmetro do `useMemo`, o `array` []) mude de valor.
   */
  const bookWithAuthors = useMemo(
    () =>
      books.map((book) => {
        const bookAuthors = authors.filter(
          (author) => book.ID === author.IDBook
        );
        book.Authors = bookAuthors;
        return book;
      }),
    [authors, books]
  );

  /**
   * O retorno é o que a gente quer que o componente renderize. Nesse caso, através dos livros obtidos atavés do cálculo de relação entre o livro e o autor (cálculo feito no `useMemo`) será renderizado as informações do livro.
   */
  return (
    <div>
      {/* iteração sobre os livros com os autores. Para cada livro, me retorne um novo array que contenha um componente `BookInfo` (Componente criado para mostrar as informações do livro)*/}
      {bookWithAuthors.map((book) => (
        /**
         * Por ser uma `arrow function` o que se passa depois dela sem as chaves `{}` já é o retorno. é aqui que a gente passa as informações do livro para o componente. Pois em cada livro, eu crio um novo componente e no final do cálculo da função ele me retornará esse array de componentes para que o react consiga  renderizar
         *
         * O operador `...` é capaz de passar todas as propiedades de uma vez, pois ele é um spread operator (pesquisar mais sobre). É como se ele estivesse fazendo isso:
         *
         * <BookInfo
         *    ID ={book.ID}
         *    Title = {book.Title}
         *    Description = {book.Description}
         *    PageCount = {book.PageCount}
         *    PublishDate = {book.PublishDate}
         *    Authors = {book.Authors}
         *  />
         *
         * Apesar de nesse caso os atributos ter começado capitalizado por causa da resposta JSON da API (e do contract), isso não é uma boa prática, sempre defina a `prop` como `camelCase`
         *
         * Não falamos sobre a propriedade reservada `key`. Ela não foi a gente que definiu, foi o próprio react. Ela serve para podermos otimizar a renderização através de arrays (pesquisar mais sobre `key prop react`) e ela sempre deve receber um valor único para que funcione bem, nesse caso passe o ID pois sei que um ID deve ser sempre único.
         */

        <BookInfo {...book} key={book.ID} />
      ))}
    </div>
  );
};

export default Books;
