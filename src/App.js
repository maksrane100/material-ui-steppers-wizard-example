import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import StepperComponent from './StepperComponent';


class App extends Component {
	
	
	constructor(props) {
		super(props);
	}

	componentWillMount(){		

	}
	
	
	render() {
		return (
		
			<div className="container">
				<div className="jumbotron">
					<div>Wizard Flow Demonstration</div>				
					<StepperComponent />
				</div>
			</div>
	
	   );
  }
}

export default App;