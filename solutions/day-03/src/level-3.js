import React from 'react';
import ReactDOM from 'react-dom/client';
import asabenehImage from './images/asabeneh.jpg';

// data
const userName = 'ASABENEH YETAYEH';
const userJob = 'Senior Developer';
const userAddress = 'Finland';
const userSkill = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB',
                    'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis',
                    'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
                  ]

// components
const userImage = (
  <div className='user-image-style'>
    <img src={asabenehImage} alt='asabeneh' />
  </div>
)
const Title = ({text}) => {
  return(
    <div className='title-style'>
      <h5>{text}</h5>
    </div>
  )
}
const Subtitle = ({job, address}) => {
  return(
    <div className='subtitle-style'>
      <p>
        {job} {address}
      </p>
    </div>
  )
}
const userProfile = (
  <div className='user-profile'>
    {userImage}
    <Title text={userName} />
    <Subtitle job={userJob} address={userAddress} />
  </div>
)
const Button = ({text}) => {
  return(
    <button className='button-style'>{text}</button>
  )
}
const Skill = (
  <>
    <Title text='SKILL' />
    <div className='button-wrapper'>
      {userSkill.map((skill, index) => (
        <Button key={index} text={skill} />
      ))}
    </div>
  </>
)
const Footer = (
  <footer className='footer-wrapper'>
    <p>
      <i className="far fa-clock"></i> Joined on Aug 30, 2020
    </p>
  </footer>
)

// app
const app = (
  <div className='app'>
    {userProfile}
    {Skill}
    {Footer}
  </div>
)

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  app
)