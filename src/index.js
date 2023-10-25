import React from 'react'
import ReactDom from 'react-dom';

// CSS
import './index.css';

import { data } from './books';
import SpecificBook from './Book';
import { greeting } from './testing/testing';



function BookList(){
  console.log(greeting);

  return (
    <section className='booklist'>
        {data.map((book, index) => {
          return <SpecificBook  key={book.id} {...book}>
          </SpecificBook>;

        })}
    </section>
  );
}




ReactDom.render(<BookList/>, document.getElementById('root'));

























// stateless function component
// always return JSX


// JSX Rules
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting



// Nested Component, React Tools
// const Greeting = ()=> {
//   return React.createElement('h1', {}, 'hello world');
// }


// (http://localhost:3000/))