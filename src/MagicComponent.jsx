import React from 'react';
import style from './css/style.scss';

class MagicComponent extends React.Component {
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

    sum(a, b) {
	return a + b;
    }
};
 
module.exports = MagicComponent;
