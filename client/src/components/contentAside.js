import React, { Component } from 'react';
import { connect } from 'react-redux';
import AsideAd from './sideAd';
import top from '../res/images/top3.jpg';
import Couch from '../res/images/couch.jpg';

function mapStateToProps(state) {
  return {

  };
}

class ContentAside extends Component {
  render() {
    return (
      <div style={styles.wrapper} className="aside">
        <div>
          <AsideAd asideAdTitle="Joe Fresh" asideAdImage={top} asideAdDescription="Joe Fresh is a fashion brand and retail chain created by designer Joe Mimran for Canadian food distributor Loblaw Companies Limited."/>
          <AsideAd asideAdTitle="Ashley Furniture" asideAdImage={Couch} asideAdDescription="As a global citizen, Ashley HomeStore places great value on the people and families who make up a community. Every year, we donate our time, money and resources to helping people live a better life."/>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    width: '24%',
    padding: '2%',
    boxSizing: 'border-box',
    borderLeft: '1px solid rgba(128,128,128,.2)',
  }
}

export default connect(
  mapStateToProps,
)(ContentAside);