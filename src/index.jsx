import React from 'react';
import ReactDOM from 'react-dom';

import style from './css/style.scss';

class SampleComponent extends React.Component {
    constructor() {
	super();
	this.state = {
	    componentColor: style.color1
	}
    }
    
    toggleColor() {
	this.setState({
	    componentColor: style.color1
	})
	
	if (this.state.componentColor == style.color1) {
	    this.setState({
		componentColor: style.color2
	    })
	}
    }

    render() {
	return (
	    <div onClick={() => this.toggleColor()}>
	      <p className={this.state.componentColor}>Click Me!</p>
	    </div>
	);
    }
};

class App extends React.Component {
    render() {
	return (
	    <div>
	      <h1 className={style.color1}>Hello, World!</h1>
	      <SampleComponent/>
	    </div>
	);
    }
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
