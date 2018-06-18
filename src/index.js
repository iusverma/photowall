import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';

const tasks = ['First World','Second World','Third World'];

// Creating simple element
const element = React.createElement('h1',null,'Hello World');

// Create collection element
const element2 = React.createElement('ol',null, 
    tasks.map((task, index) => React.createElement('li',{key: index},task)));

ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(element2, document.getElementById('root'));

// Create element with JSX, this is similar to createElement
const element3 =
  <div>
    <h3> Tasks List </h3>
    <ol> {tasks.map((task, index)=><li key={index} index={index}>{task}</li>)}</ol>
  </div>
ReactDOM.render(element3, document.getElementById('root'));

// Creating & using class
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));