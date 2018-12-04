import React from 'react'; //without ./ prefix, webpack looks for an npm package with th specified name
import ReactDOM from 'react-dom';
// import './main-page.css';
import App from './main-page';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
