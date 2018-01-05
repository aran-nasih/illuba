import React, { Component } from 'react';
import Grow from '../../res/images/grow.png'
import {Link} from 'react-router-dom'
// import { colors } from '../../consts/baseStyles';

export default class JoinBar extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.container} className="join-bar-container">
          <div style={styles.imgWrapper}>
            <img alt="grow business" src={Grow} style={{width: '100%'}}/>
          </div>
          
          <div style={styles.descWrapper} className="join-bar-desc-wrapper">
            <h2 className="header-text" style={{marginBottom: '8px'}}>Get your store and products noticed!</h2>
            <p className="paragraph-text">Join illuba now and reach your products to thousands of people. Promote your store and share your items.</p>
          </div>
          <Link className="base-btn base-btn-primary" to={'/login'}>JOIN ILLUBA</Link>
          {/* <div className="base-btn " style={{backgroundColor: colors.iGreen, width: '80px', color: 'white'}}>JOIN ILLUBA</div> */}
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    background: 'linear-gradient(45deg, #02CBBA, #02B4E3)',
    padding: '4%'
  },

  container: {
    width: '60%',
    padding: '60px',
    boxSizing: 'borderBox',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    backgroundColor: 'white',
    boxShadow: '8px 10px 20px 0px rgba(46,61,73,0.15)',
    borderRadius: '8px'
  },

  imgWrapper: {
    width: '60px',
  },

  descWrapper: {
    paddingRight: '70px',
    boxSizing: 'border-box',
    marginLeft: '60px',
    marginRight: '60px',
  }
}






