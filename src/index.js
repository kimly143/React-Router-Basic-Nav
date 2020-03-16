import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

ReactDOM.render(
	<Router>
        <Navigation />
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
	</Router>,
	document.getElementById('root')
);
