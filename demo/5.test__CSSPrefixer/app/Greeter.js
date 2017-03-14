// Greeter.js

import React, {Component} from 'react';
import config from './config.json';
import css1 from './Greeter.css';
import css2 from './main.css'


class Greeter extends Component{
	render(){
		return (
				<div>
					<p className={css2.header}> {config.greetText}</p>
					<p className={css1.root}>{config.title}</p>
				</div>
			);
	}
}

export default Greeter