import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class ProfileInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <ul style={styles.ulWrapper}>

            <li className="card-3 res-full" style={styles.li}>
              <p className="header-text">Store Name:&nbsp;</p> 
              <p className="paragraph-text">{this.props.user.storeName}</p>
            </li>

            <li className="card-3 res-full" style={styles.li}>
              <p className="header-text">Store Address:&nbsp;</p> 
              <p className="paragraph-text">{this.props.user.storeAddress}</p>
            </li>

            <li className="card-3 res-full" style={styles.li}>
              <p className="header-text">Email:&nbsp;</p> 
              <p className="paragraph-text">{this.props.user.email}</p>
            </li>

            <li className="card-3 res-full" style={styles.li}>
              <p className="header-text">Username:&nbsp;</p> 
              <p className="paragraph-text">{this.props.user.username}</p>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  ulWrapper: {
    display : 'flex',
    flexWrap: 'wrap',
    padding: '0px'
  },

  li: {
    display: 'flex',
    marginRight: '8px',
    marginBottom: '8px'
  }
}

export default connect(
  mapStateToProps,
)(ProfileInfo);