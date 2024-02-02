import React from 'react';
import ReactDOM from 'react-dom/client';

const Button = (
  <div className='button-wrapper'>
    <button>Subscribe</button>
  </div>
)

const Title = (
  <div className='title-wrapper'>
    <h1>SUBSCRIBE</h1>
  </div>
)
const Subtitle = (
  <div className='subtitle-wrapper'>
    <p>Sign up with email address to receive news and updates</p>
  </div>
)

const Input = (props) => {
  return (
    <div>
      <input type='text' placeholder={props.placeholder} />
    </div>
  );
};

const InputGroup = (
  <div className='input-wrapper'>
    <Input placeholder="First Name" />
    <Input placeholder="Last Name" />
    <Input placeholder="Email" />
  </div>
)

const app = (
  <div className='app'>
    {Title}
    {Subtitle}
    {InputGroup}
    {Button}
  </div>
)
const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  app
)