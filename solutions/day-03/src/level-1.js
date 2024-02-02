import React from 'react';
import ReactDOM from 'react-dom/client';
import HtmlLogo from './images/html_logo.png';
import CssLogo from './images/css_logo.png';
import ReactLogo from './images/react_logo.png';
import JsLogo from './images/js_logo.png';

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

const Tech = (
  <div className='techs-wrapper'>
    <p>Front End Technologies</p>
    <div className='techs-image'>
      <img src={HtmlLogo} alt='html' />
      <img src={CssLogo} alt='css' />
      <img src={JsLogo} alt='js' />
      <img src={ReactLogo} alt='react' />
    </div>
  </div>
)

rootElement.render(
  Tech
)