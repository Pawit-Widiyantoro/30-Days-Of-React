import React from 'react';
import ReactDOM from 'react-dom/client';

// color component
const ColorBlock = ({color}) => {
  return (
    <div className='block-wrapper' style={{ backgroundColor: color }} >
      <p> {color} </p>
    </div>
  )
}

// layout for color component
const Main = () => {
  return (
    <div className='main-wrapper'>
      <ColorBlock color="#518cef" />
      <ColorBlock color="#3b10c4" />
      <ColorBlock color="#9aede6" />
      <ColorBlock color="#8ee763" />
      <ColorBlock color="#a30dd0" />
    </div>
    )
}

// app component
const App = () => {
  return (
  <div className='App'>
    <Main />
  </div>
  )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)