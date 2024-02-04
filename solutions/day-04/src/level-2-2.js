import React from 'react';
import ReactDOM from 'react-dom/client';

// button component
const Button = ({text}) => {
  <div className='button-wrapper'>
    <button> {text} </button>
  </div>
}

// title component
const Title = ({text}) => {
  <div className='title-wrapper'>
    <h1> {text} </h1>
  </div>
}

// subtitle component
const Subtitle = ({text}) => {
  <div className='subtitle-wrapper'>
    <p> {text} </p>
  </div>
}

// input component
const Input = ({placeholder}) => {
  return (
    <div>
      <input type='text' placeholder={placeholder} />
    </div>
  );
};

// input parent component
const InputGroup = () => {
  <div className='input-wrapper'>
    <Input placeholder="First Name" />
    <Input placeholder="Last Name" />
    <Input placeholder="Email" />
  </div>
}

// App component
const App = () => {
  <div className='app'>
    <Title text="SUBSCRIBE" />
    <Subtitle text="Sign up with email address to receive news and updates" />
    <InputGroup />
    <Button text="Subscribe" />
  </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  <App />
)