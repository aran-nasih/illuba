import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileUpdateinfo from './profile_updateinfo'

function mapStateToProps(state) {
  return {

  };
}

class Profileedit extends Component {
  render() {
    return (
      <div>
        <ProfileUpdateinfo user={this.props.user}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Profileedit);