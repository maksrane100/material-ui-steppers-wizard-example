import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});




class Form1 extends Component {

	constructor() {
		super();
		this.state = {
			restaurant: {}
		};
	}

	onChange = name => event => {
		this.setState({ [name]: event.target.value });
		sessionStorage.setItem(name, event.target.value);
	}

	onSubmit = (e) => {
		e.preventDefault();
		const restaurantObj = this.state.restaurant
	}

  render() {
	const { classes } = this.props;
    const { name } = this.state;
	
	
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-lastname">
              Create Restaurant
            </h3>
          </div>
          <div class="panel-body">
           
            
			<form onSubmit={this.onSubmit} className={classes.container} noValidate autoComplete="off">     
                
				<TextField
					id="outlined-name"
					label="Name"
					className={classes.textField}
					value={this.state.name}
					onChange={this.onChange('name')}
					margin="normal"
					fullWidth
					variant="outlined"
				/>
		
                
				<TextField
					id="outlined-name"
					label="Title"
					className={classes.textField}
					value={this.state.title}
					onChange={this.onChange('title')}
					margin="normal"
					fullWidth
					variant="outlined"
				/>
			
                
				<TextField
					id="outlined-name"
					label="Highlight"
					className={classes.highlight}
					value={this.state.highlight}
					onChange={this.onChange('highlight')}
					margin="normal"
					fullWidth
					variant="outlined"
				/>
              
            </form>
			
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Form1);