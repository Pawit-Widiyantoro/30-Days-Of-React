import React from 'react';
import ReactDOM from 'react-dom/client';
import asabenehImage from './images/asabeneh.jpg';

// dynamic data
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 4, 2020'

// components
const Header = () => {
  <header>
    <div className='header-wrapper'>
      <h1> {welcome} </h1>
      <h2> {title} </h2>
      <h3> {subtitle} </h3>
      <p> {author.firstName}, {author.lastName} </p>
      <small> {date} </small>
    </div>
  </header>
}

const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='Asabeneh' />
  </div>
)

const userSkills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB',
                    'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis',
                    'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
                  ]
const TechList = ({userSkills}) => {
  const techsFormatted = userSkills.map((skill, i) => (
    <button key={i} className='button-style'> {skill} </button>
  ));
  return techsFormatted;
}

const Main = () => (
  <main>
    <div className='main-wrapper'>
      <UserCard />
      <p>Prerequisite to get started react.js:</p>
      <div className='button-wrapper'>
        <TechList userSkills={userSkills} />
      </div>
    </div>
  </main>
)

const Copyright = 'Copyright 2020'
const Footer = () => (
  <footer>
  <div className='footer-wrapper'>
    <p>{Copyright}</p>
  </div>
</footer>
)

const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  <App />
)