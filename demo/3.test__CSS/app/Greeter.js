// Greeter.js

import React, {Component} from 'react'
import config from './config.json';


class Greeter extends Component{
	render(){
		return (
				<div className="header">
					{config.greetText}
				</div>
			);
	}
}

export default Greeter