/* @flow */

import React, {Component} from 'react';
import type { Element } from 'react';
import Helmet from 'react-helmet';
import {Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Banner from './Banner';
// import logo from './images/logo.png';
import styles from './styles.scss';

export default class Registration extends Component {

  render() {
    return (

    	 <div className={styles.App}>
    		 <MuiThemeProvider>
    		 <div className={styles.registerationPage}>
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={4}>
          
            <h1>WELCOME</h1>
            <MuiThemeProvider>
              <div className={styles.createForm}>
                <div>
                  <TextField hintText="First Name" floatingLabelText="First Name" className={styles.inputTextBox} />
                  <TextField hintText="Last Name" floatingLabelText="Last Name" className={styles.inputTextBox}/>
                  <TextField hintText="Zip Code" floatingLabelText="Zip Code" className={styles.inputTextBox}/>
                  <TextField hintText="Phone" floatingLabelText="Phone" className={styles.inputTextBox}/>
                  <TextField hintText="Email" floatingLabelText="Email" className={styles.inputTextBox}/>
                  <TextField hintText="Password" floatingLabelText="Password" className={styles.inputTextBox_Password}/>
                </div>
                <div className={styles.regPasswordRules}>Make your password at least 8 characters with 1 number and 1 special character. It is case-sensitive.</div>
                <div className={styles.regRewardSection}>
                  <div className={styles.regRewardSectionTop}>Enter your AutoZone Rewards Member ID</div>
                  <div className={styles.regRewardSectionMid}>Link AutoZone Rewards with the Member ID number on the back of your AutoZone Rewards card.</div>
                  <TextField hintText="9101000389891796" floatingLabelText="Autozone Rewards Member ID" className={styles.inputTextBox_AZID} />
                  <div className={styles.regAZMember_Error}>We couldn’t find that ID number. Check against the back of your card and try again?</div>
                </div>
                <div className={styles.regSubscription}>
                  <Checkbox />
                  <div>Yes, I would like to receive special offers, promotions, news, surveys, and correspondence from AutoZone, AutoZone.com, and AutoZone Rewards.
                    <a>Read our Privacy Policy.</a>
                  </div>
                  <div className={styles.regReadTerms}>By clicking sign up, you agree to the Terms &amp; Conditions </div>
                </div>
                 <div className={styles.regButtonSection}>
                    <RaisedButton label="Sign Up" className={styles.regPrimaryBtn} />
                    <RaisedButton label="Cancel" className={styles.regSecondaryBtn} />
                  </div>
                  <div className={styles.regSignInLink}>Already have an account? <a href="#">Sign In</a></div>
              </div>
            </MuiThemeProvider>
          </Col>
        <Col xsHidden lg={8}><Banner/></Col>
        </Row>
      </div>
    		  </MuiThemeProvider>
  		</div>

			);
  }

}
