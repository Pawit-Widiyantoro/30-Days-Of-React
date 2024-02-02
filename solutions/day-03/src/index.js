import React from 'react';
import ReactDOM from 'react-dom/client';
import asabenehImage from './images/asabeneh.jpg';

// inline styles
// const headerStyles = {
//   backgroundColor: '#61DBFB',
//   fontFamily: 'Helvetica Neue',
//   padding: 25,
//   lineHeight: 1.5,
// }
// const mainStyles = {
//   backgroundColor: '#F3F0F5',
// }
// const footerStyles = {
//   backgroundColor: '#61DBFB',
// }

// element
// header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>J{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)
const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)
// main
const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)
const user = (
  <div>
    <img src={asabenehImage} alt='asabeneh' />
  </div>
)
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)
// footer
const copyRight = 'Copyright 2020'
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)


const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  app
)