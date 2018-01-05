import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class SideAd extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div>
          <div style={styles.imgWrapper}>
            <img src={this.props.asideAdImage} alt="ad" style={{width: '100%'}}/>
          </div>
          <div style={{padding: '8px 16px'}}>
            <h2 className="header-text" style={{marginBottom: '8px'}}>{this.props.asideAdTitle}</h2>
            <p className="paragraph-text">{this.props.asideAdDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    width: '100%',
    fontSize: '.8em',
    margin: '0 auto 20px auto',
    boxShadow: '2px 2px 10px 0px rgba(46,61,73,0.15)',
    borderRadius: '8px'
  
  },

  imgWrapper: {
    width: '100%', 
    height: '160px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
}

export default connect(
  mapStateToProps,
)(SideAd);