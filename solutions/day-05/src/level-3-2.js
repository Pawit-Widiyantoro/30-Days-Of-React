import React from 'react';
import ReactDOM from 'react-dom/client';
import asabenehImage from './images/asabeneh.jpg';

// data
const userName = 'ASABENEH YETAYEH';
const userJob = 'Senior Developer';
const userAddress = 'Finland';
const userSkills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB',
                    'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis',
                    'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
                  ]

// date formatter
const showDate = ({time}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0,3);
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month} ${date}, ${year}`;
}

// image component
const UserImage = ({image, alt}) => {
    return(
        <div className='user-image-style'>
            <img src={image} alt={alt} />
        </div>
    )
}

// Title component
const Title = ({text}) => {
  return(
    <div className='title-style'>
      <h5>{text}</h5>
    </div>
  )
}

// subtitle component
const Subtitle = ({job, address}) => {
  return(
    <div className='subtitle-style'>
      <p>
        {job}, {address}
      </p>
    </div>
  )
}

// userprofile component for profile parents
const UserProfile = ({image, alt, name, job, address}) => {
    return (
        <div className='user-profile'>
            <UserImage image={image} alt={alt} />
            <Title text={name} />
            <Subtitle job={job} address={address} />
        </div>
    )
}

// button component
const Button = ({text}) => {
  return(
    <button className='button-style'>{text}</button>
  )
}

// single skill component
const Skill = ({skills}) => {
    return(
        <>
            <Title text='SKILL' />
            <div className='button-wrapper'>
                {skills.map((skill, index) => (
                    <Button key={index} text={skill} />
                ))}
            </div>
        </>
    )
}

// Footer component
const Footer = ({currentDate}) => { 
    return(
        <footer className='footer-wrapper'>
            <p>
            <i className="far fa-clock"></i> Joined on {showDate({time:currentDate})}
            </p>
        </footer>
    )
}

// app
const App = () => {
    const currentDate = new Date();
    return(
        <div className='app'>
            <UserProfile 
                image={asabenehImage} 
                alt='asabeneh' 
                name={userName} 
                job={userJob} 
                address={userAddress} />
            <Skill skills={userSkills} />
            <Footer currentDate={currentDate} />
        </div>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  <App />
)