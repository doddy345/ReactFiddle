import React from 'react';
import ReactDOM from 'react-dom';

import MagicComponent from './MagicComponent'

class App extends React.Component {
    render() {
	return (
	    <div>
	      <h1>Hello, World!</h1>
	      <MagicComponent/>
	    </div>
	);
    }
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
