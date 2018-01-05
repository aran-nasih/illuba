import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signin from './signin';
import Signup from './signup';
import Bg from '../../res/images/register_bg.png'
import {Link} from 'react-router-dom'
import '../../res/css/home/header.css'

function mapStateToProps(state) {
  return {

  };
}

class UserMain extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div>
          <div style={styles.bgImage}>
            <img alt="bg" src={Bg} style={{height: '100%'}}/>
          </div>
         
          <div style={styles.container} className="login-container">
            <div style={styles.functionsWrapper}>
              <div style={styles.headerWrapper}>
                <Link to={'/'} className="header-title">illuba</Link>
              </div>
              <Signin />
            </div>

            <div style={styles.signupWrapper} className="login-signup-wrapper">
              <Signup  />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
  }, 

  
  bgImage: {
    height: '100%',
    position: 'fixed',
    zIndex: -1
  },
  
  container: {
    padding: '4%',
    display: 'flex',
  },

  headerWrapper: {
    marginBottom: '32px'
  },

  signupWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: '8%'
  }
    
} 

export default connect(
  mapStateToProps,
)(UserMain);