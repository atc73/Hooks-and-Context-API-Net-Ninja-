import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuhtor] = useState('');

  const { dispatch } = useContext(BookContext);
  return (
    <div className='bookForm'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'ADD_BOOK', payload: { title, author } });
          setTitle('');
          setAuhtor('');
        }}
      >
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Add a title...'
          required
        />
        <input
          type='text'
          value={author}
          onChange={(e) => setAuhtor(e.target.value)}
          placeholder='Add an author...'
          required
        />
        <input type='submit' value='add book' />
      </form>
    </div>
  );
};

export default BookForm;
