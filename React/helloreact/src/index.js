// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <h1>Hello there </h1>
//     <h2>Byee</h2>
//     {/* here JSX(javascript XML or javascript syntax eXtension) is rendering by default */}
//   </div>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Shivam from './GreetShivam.js'
import GreetAman from './GreetAman.jsx';

let Byee=()=>{return <h2>Byeee</h2>};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <Hello/>
 <Shivam/>
 <GreetAman/>
 <Byee/>
 </>
);

function Hello()
{
  return <h1>Hello there</h1>;
}
