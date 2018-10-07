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


const hours = [
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '9',
    label: '9',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
];

const minutes = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '15',
    label: '15',
  },
  {
    value: '30',
    label: '30',
  },
  {
    value: '45',
    label: '45',
  },
];


class Form3 extends Component {

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
				  id="outlined-select-currency"
				  select				  
				  className={classes.textField}
				  value={this.state.openathour}
				  name="openathour"
				  onChange={this.onChange('openathour')}
				  SelectProps={{
					MenuProps: {
					  className: classes.menu,
					},
				  }}
				  helperText="Please select open at hour (AM)"
				  margin="normal"
				  fullWidth
				  variant="outlined"
				>
				  {hours.map(option => (
					<MenuItem key={option.value} value={option.value}>
					  {option.label}
					</MenuItem>
				  ))}
				</TextField>
              
				<TextField
				  id="outlined-select-currency"
				  select				  
				  className={classes.textField}
				  value={this.state.openatminute}
				  name="openatminute"
				  onChange={this.onChange('openatminute')}
				  SelectProps={{
					MenuProps: {
					  className: classes.menu,
					},
				  }}
				  helperText="Please select open at minute"
				  margin="normal"
				  fullWidth
				  variant="outlined"
				>
				  {minutes.map(option => (
					<MenuItem key={option.value} value={option.value}>
					  {option.label}
					</MenuItem>
				  ))}
				</TextField>
			
				<TextField
				  id="outlined-select-currency"
				  select				  
				  className={classes.textField}
				  value={this.state.closeathour}
				  name="closeathour"
				  onChange={this.onChange('closeathour')}
				  SelectProps={{
					MenuProps: {
					  className: classes.menu,
					},
				  }}
				  helperText="Please select close at hour (PM)"
				  margin="normal"
				  fullWidth
				  variant="outlined"
				>
				  {hours.map(option => (
					<MenuItem key={option.value} value={option.value}>
					  {option.label}
					</MenuItem>
				  ))}
				</TextField>
              
				<TextField
				  id="outlined-select-currency"
				  select				  
				  className={classes.textField}
				  value={this.state.closeatminute}
				  name="closeatminute"
				  onChange={this.onChange('closeatminute')}
				  SelectProps={{
					MenuProps: {
					  className: classes.menu,
					},
				  }}
				  helperText="Please select close at minute"
				  margin="normal"
				  fullWidth
				  variant="outlined"
				>
				  {minutes.map(option => (
					<MenuItem key={option.value} value={option.value}>
					  {option.label}
					</MenuItem>
				  ))}
				</TextField>
				
            </form>
			
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Form3);