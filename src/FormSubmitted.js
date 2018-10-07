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



class FormSubmitted extends Component {

	constructor() {
		super();
	
		this.state = {
			name: sessionStorage.getItem("name"),
			title: sessionStorage.getItem("title"),
			highlight: sessionStorage.getItem("highlight"),

			address1: sessionStorage.getItem("address1"),
			address2: sessionStorage.getItem("address2"),
			city: sessionStorage.getItem("city"),
			state: sessionStorage.getItem("state"),
			zip: sessionStorage.getItem("zip"),
			country: sessionStorage.getItem("country"),

			openathour: sessionStorage.getItem("openathour"),
			openatminute: sessionStorage.getItem("openatminute"),
			closeathour: sessionStorage.getItem("closeathour"),
			closeatminute: sessionStorage.getItem("closeatminute"),
		};
	}

 

  render() {
	const { classes } = this.props;
    const { name } = this.state;
	
	
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-lastname">
              Restaurant has been created.
            </h3>
          </div>
          <div class="panel-body">
           
            <div className="fieldTitle">Name / Speciality</div>
			<div className="fieldValue">{this.state.name}</div>
			<div className="fieldValue">{this.state.title} {this.state.highlight}</div>
			
			<div className="fieldTitle">Location</div>
			<div className="fieldValue">{this.state.address1} {this.state.address2}</div>
			<div className="fieldValue">{this.state.city} {this.state.state} {this.state.zip}</div>
			<div className="fieldValue">{this.state.country}</div>
			
			<div className="fieldTitle">Hours</div>
			<div className="fieldValue">{this.state.openathour}:{this.state.openatminute} AM To {this.state.closeathour}:{this.state.closeatminute} PM</div>
			
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FormSubmitted);