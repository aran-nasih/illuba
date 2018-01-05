import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import axios from 'axios' 
import {style, colors} from '../../consts/baseStyles';

function mapStateToProps(state) {
  return {

  };
}

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', login: false, user: '', failedLoggingin: false}
  }

  login(e) {
    e.preventDefault();
    axios.post('/users/signin', {
      username: this.state.username,
      password: this.state.password
    })
    .then((res) => {
      this.setState({login: res.data.login, user: res.data.user})
    })
    .catch((err) => {
      this.setState({failedLoggingin: true})
    })
  }

  render() {
    return (
      <div style={styles.wrapper} className="login-login-wrapper">
        <div style={{marginLeft:  '16px', color: colors.iGreen}}>
          <h2 className="header-text">Log In</h2>
        </div>

        <form onSubmit={(e) => {this.login(e)}} style={styles.formWrapper}>
          <TextField
            required="true"
            type="name"
            style={style.baseTextInput}
            onChange={(obj, newValue) => {this.setState({username: newValue})}}
            value={this.state.username}
            floatingLabelText="Username"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <TextField
            required="true"
            type="password"
            style={style.baseTextInput}
            onChange={(obj, newValue) => {this.setState({password: newValue})}}
            value={this.state.password}
            floatingLabelText="Password"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />
          <div style={{marginTop: '8px', width: '100%', marginLeft: '42px'}}>
            {(this.state.failedLoggingin) ? <p style={styles.errorText} className="paragraph-text">Username or password is incorrect</p>: <p></p>}
            <button className="base-btn base-btn-primary" type="submit">Log In</button>
          </div>
        </form>
        {(this.state.login) ? <Redirect to={'/' + this.state.user.username} /> : ""}
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

  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  errorText: {fontSize: '.9em', margin: '0px', marginBottom: '14px', color: colors.iOrange}
  
}

export default connect(
  mapStateToProps,
)(Signin);