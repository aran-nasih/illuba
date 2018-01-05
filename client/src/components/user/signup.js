import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import {style, colors} from '../../consts/baseStyles';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        email: '', username: '', password: '', confirmPassword: '', storeName: '', storeAddress: ''
      },
      nonMatchPassword: false, usedUsername: false, userRegistered: false
    } 
  }

  register(e) {
    e.preventDefault();
    if (this.state.data.password !== this.state.data.confirmPassword) {
      this.setState({nonMatchPassword: true});
      return
    } 
    this.setState({nonMatchPassword: false});
    axios.post('/users/signup', {
      data: this.state.data
    })
    .then((res) => {
      this.setState({usedUsername: res.data.usedUsername, userRegistered: res.data.userRegistered})
    })
    .catch((err) => {console.log("Error making post request")})
  }

  changeDataState(cases, data) {
    let s = this.state.data; 
    switch(cases) {
      case "email": this.setState({data: {email: data, username: s.username, password: s.password, confirmPassword: s.confirmPassword, storeName: s.storeName, storeAddress: s.storeAddress}}); break;
      case "username": this.setState({data: {email: s.email, username: data, password: s.password, confirmPassword: s.confirmPassword, storeName: s.storeName, storeAddress: s.storeAddress}}); break;
      case "password": this.setState({data: {email: s.email, username: s.username, password: data, confirmPassword: s.confirmPassword, storeName: s.storeName, storeAddress: s.storeAddress}}); break;
      case "confirmPassword": this.setState({data: {email: s.email, username: s.username, password: s.password, confirmPassword: data, storeName: s.storeName, storeAddress: s.storeAddress}}); break;
      case "storeName": this.setState({data: {email: s.email, username: s.username, password: s.password, confirmPassword: s.confirmPassword, storeName: data, storeAddress: s.storeAddress}}); break;
      case "storeAddress": this.setState({data: {email: s.email, username: s.username, password: s.password, confirmPassword: s.confirmPassword, storeName: s.storeName, storeAddress: data}}); break;
      default: return;
    }
  }

  render() {
    return (
      <div style={styles.wrapper} className="login-signup-container">
        <div style={{marginLeft:  '16px', color: colors.iGreen}}>
          <h2 className="header-text">Sign Up</h2>
        </div>

        <form style={styles.formWrapper} onSubmit={(e) => this.register(e)}>
          <TextField
            required="true"
            type="email"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.changeDataState("email", newValue)}
            value={this.state.data.email}
            floatingLabelText="Email"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
            />

            <TextField
            required="true"
            type="name"         
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.changeDataState("username", newValue)}
            value={this.state.data.username}
            floatingLabelText="Username"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
            />

          <TextField
            required="true"
            type="password"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.changeDataState("password", newValue)}
            value={this.state.data.password}
            floatingLabelText="Password"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
            />

          <TextField
            required="true"
            type="password"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.changeDataState("confirmPassword", newValue)}
            value={this.state.data.confirmPassword}
            floatingLabelText="Confirm Password"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
            />

          <TextField
            required="true"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.changeDataState("storeName", newValue)}
            value={this.state.data.storeName}
            floatingLabelText="Store Name"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <TextField
            required="true"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.changeDataState("storeAddress", newValue)}
            value={this.state.data.storeAddress}
            floatingLabelText="Store Address"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <div style={{marginTop: '8px', width: '100%', marginLeft: '20px'}}>
            {(this.state.nonMatchPassword) ? <p style={styles.errorText} className="paragraph-text">Passwords does not match</p>: <p></p>}
            {(this.state.usedUsername) ? <p style={styles.errorText} className="paragraph-text">Username is not available</p>: <p></p>}
            <button className="base-btn base-btn-primary" type="submit">Sign Up</button>
          </div>
        </form>

        {(this.state.userRegistered) ? <Redirect to={'/' + this.state.data.username} /> : ""}
      </div>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: 'white',
    padding: '16px 16px 24px 16px ',
    borderRadius: '8px',
    width: '460px',
    boxShadow: '5px 5px 25px 0px rgba(46,61,73,0.2)',
    boxSizing: 'border-box'
  },

  errorText: {fontSize: '.9em', margin: '0px', marginBottom: '8px', color: colors.iOrange}
}

export default Signup;