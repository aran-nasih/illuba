import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import {style, colors} from '../../consts/baseStyles';
// import { Redirect } from 'react-router-dom';

function mapStateToProps(state) {
  return {

  };
}

class ProfileUpdateinfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.user.email, username: this.props.user.username, storeName: this.props.user.storeName, storeAddress: this.props.user.storeAddress,
      nonMatchPassword: false, usernameAvailable: false, updated: false
    } 
  }

  render() {
    return (
      <div className="card-3 res-full top-sharp-border">
        <div style={{marginLeft:  '16px', marginBottom: '32px', color: colors.iGreen}}>
          <h2 className="header-text">Update Profile</h2>
        </div>

        <form style={styles.formWrapper} onSubmit={(e) => this.updateProfile(e)}>
          <TextField
            required="true"
            type="email"
            style={style.baseTextInput}
            onChange={(obj, newValue) => {this.setState({email: newValue})}}
            value={this.state.email}
            floatingLabelText="Email"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <TextField
            required="true"
            type="text"         
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
            style={style.baseTextInput}
            onChange={(obj, newValue) => {this.setState({storeName: newValue})}}
            value={this.state.storeName}
            floatingLabelText="Store Name"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <TextField
            required="true"
            style={style.baseTextInput}
            onChange={(obj, newValue) => {this.setState({storeAddress: newValue})}}
            value={this.state.storeAddress}
            floatingLabelText="Store Address"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <div style={{marginTop: '8px', width: '100%', marginLeft: '20px'}}>
            {(this.state.nonMatchPassword) ? <p style={styles.errorText} className="paragraph-text">Passwords does not match</p>: <p></p>}
            {(this.state.usedUsername) ? <p style={styles.errorText} className="paragraph-text">Username is not available</p>: <p></p>}
            <button className="base-btn base-btn-primary" type="submit">UPDATE PROFILE</button>
          </div>
        </form>

        {/* {(this.state.updated) ? window.location.replace('/' + this.state.username) : ""} */}
      </div>
    );
  }

  updateProfile(e) {
    e.preventDefault();
    const s = this.state;
    axios.post('/' + this.props.user.username + '/update', {
      oldInfo: this.props.user, email: s.email, username: s.username, storeName: s.storeName, storeAddress: s.storeAddress
    })
    .then((res) => {
      this.setState({usernameAvailable: res.data.usernameAvailable, updated: res.data.updated})
    })
    .catch((err) => {if (err) console.log("Failed updating profile info")})
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

export default connect(
  mapStateToProps,
)(ProfileUpdateinfo);