import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>
          You have {books.length} {books.length > 1 ? 'books' : 'book'} to read
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
