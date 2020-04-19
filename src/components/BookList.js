import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='bookList'>
      {books.length ? (
        <ul>
          {books.map((book) => {
            return <BookDetails book={book} key={book.id} />;
          })}
        </ul>
      ) : (
        <div>You have no books on the reading list</div>
      )}
    </div>
  );
};

export default BookList;
