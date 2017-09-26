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
	if (this.state.componentColor == style.color1) {
	    this.setState({
		componentColor: style.color2
	    })
	}
	else {
	    this.setState({
		componentColor: style.color1
	    })	    
	}
    }
    
    render() {
	return (
	    <div className={this.state.componentColor} onClick={() => this.toggleColor()}>
	      <p>Click Me!</p>
	    </div>
	);
    }
};
 
module.exports = MagicComponent;
