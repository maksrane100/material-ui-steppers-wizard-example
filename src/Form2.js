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




class Form2 extends Component {

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
					label="Address1"
					className={classes.textField}
					value={this.state.address1}
					onChange={this.onChange('address1')}
					margin="normal"
					fullWidth
					variant="outlined"
				/>
			                
				<TextField
					id="outlined-name"
					label="Address2"
					className={classes.textField}
					value={this.state.address2}
					onChange={this.onChange('address2')}
					margin="normal"
					fullWidth
					variant="outlined"
				/>
				
				<TextField
					id="outlined-name"
					label="City"
					className={classes.textField}
					value={this.state.city}
					onChange={this.onChange('city')}
					margin="normal"
					fullWidth
					variant="outlined"
				/>
				
				<TextField
					id="outlined-name"
					label="State"
					className={classes.textField}
					value={this.state.state}
					onChange={this.onChange('state')}
					margin="normal"
					fullWidth
					variant="outlined"
				/>
				
				<TextField
					id="outlined-name"
					label="Zip"
					className={classes.textField}
					value={this.state.zip}
					onChange={this.onChange('zip')}
					margin="normal"
					fullWidth
					variant="outlined"
				/>
				
				<TextField
					id="outlined-name"
					label="Country"
					className={classes.textField}
					value={this.state.country}
					onChange={this.onChange('country')}
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

export default withStyles(styles)(Form2);