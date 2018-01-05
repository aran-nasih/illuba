import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { colors } from '../../consts/baseStyles';
import catshoes from '../../res/images/catshoes.jpg';

function mapStateToProps(state) {
  return {

  };
}

class ProfileHeader extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.imgWrapper}>
          <div style={styles.imgRelative}>
            <div style={styles.imgContainer}>
              <img src={catshoes} alt="profile" style={{ minWidth: '100%', }}/>
            </div>
          </div>
        </div>

        <div style={styles.infoWrapper}>
          <h2 className="header-text">{this.props.user.storeName}</h2>
          <p className="paragraph-text">{this.props.user.storeAddress}</p>
          <p className="paragraph-text">items: {this.props.user.items.length}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
  },
  
  imgWrapper: {
    marginTop: '-2px',
    display: 'flex',
    justifyContent: 'center',
  },
  
  infoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '60px'
  },
  
  imgRelative: {
    position: 'relative',
    width: '200px',
    height: '160px',
    border: `2.4px solid rgba(169, 81, 237, .7)`,
    borderRadius: '2px',
    borderTop: 'none'
  },

  imgContainer: {
    width: '160px',
    height: '160px',
    bottom: '-50px',
    right: '20px',
    backgroundColor: 'red',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '8px'
  },
}

export default connect(
  mapStateToProps,
)(ProfileHeader);