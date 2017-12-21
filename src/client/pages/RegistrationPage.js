import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import '/styles/registration.css';
import '../styles/registration.css';


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const txtstyles ={
    textFld: { width: 356}   //assign the width as your requirement
};

const RegistrationPage = () => {
  return (
    <div className="center-align">
    
   <MuiThemeProvider>

   <TextField
      hintText="First Name"
      floatingLabelText="First Name"
      style = {txtstyles.textFld}

    />
    <br />
     <TextField
      hintText="Last Name"
      floatingLabelText="Last Name"
      style = {txtstyles.textFld}
    />
    <br />
     <TextField
      hintText="Zip Code"
      floatingLabelText="Zip Code"
      style = {txtstyles.textFld}
    />
    <br />
     <TextField
      hintText="Phone"
      floatingLabelText="Phone"
      style = {txtstyles.textFld}
    />
    <br />
     <TextField
      hintText="Email"
      floatingLabelText="Email"

      style = {txtstyles.textFld}
    />
    <br />
     <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
      style = {txtstyles.textFld}
    />
    <br />

      <Checkbox
          label="Simple"
          style={styles.checkbox}
        />

    </MuiThemeProvider>

    <div>
    	Passwords are case sensitive and must be at least 8 characters, 
    </div>
    <div>with at least 1 number and 1 special character.</div>


    </div>
  );
};

export default {
  component: RegistrationPage
};
