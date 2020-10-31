import Author from "./Author";

export default interface Book {
  ID: number;
  /**
   * Titulo do livro
   */
  Title: string;
  Description: string;
  PageCount: number;
  Excerpt: string;
  PublishDate: string;
  Authors?: Author[]
}


function retornoDoTipo<T>() : T {
  return 
} 