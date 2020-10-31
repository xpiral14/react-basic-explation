import React, { useEffect, useMemo, useState } from "react";
import BookInfo from "../../components/BookInfo";
import api from "../../config/api";
import Book from "../../contracts/models/Book";
import Author from "../../contracts/models/Author";

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await api.get("/Books");
        setBooks(response.data.slice(0, 30));
      } catch (err) {
        console.log("ERRO, nao foi possivel carregar");
      }
    }

    getBooks();
  }, []);

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

  return (
    <div>
      {bookWithAuthors.map((book) => (
        <BookInfo {...book} />
      ))}
    </div>
  );
};

export default Books;

