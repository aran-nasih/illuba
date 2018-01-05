import React, { Component } from 'react';
import { connect } from 'react-redux';
import {colors} from '../../consts/baseStyles';
import shoppingCart from '../../res/images/shoppingcart.png'
import clock from '../../res/images/clock.png'
import dollar from '../../res/images/dollar.png'

function mapStateToProps(state) {
  return {

  };
}

class Service extends Component {
  render() {
    return (
      <div className="services-wrapper">
        <div style={styles.serviceWrapper}>
          <div style={styles.serviceImage}><img alt="shopping cart" src={shoppingCart} style={{width: '40%'}}/></div>
          <div><h2 style={{color: colors.iGreen, textAlign: 'center', margin: '0px'}}>Find Efficiently</h2></div>
          <div><p style={{textAlign: 'center', color: '#525C65'}}>Find the product you're looking for efficiently, start your search based on different categories, locations, price and more.</p></div>
        </div>

        <div style={styles.serviceWrapper}>
          <div style={styles.serviceImage}><img alt="clock" src={clock} style={{width: '40%'}}/></div>
          <div><h2 style={{color: colors.iBlue, textAlign: 'center', margin: '0px'}}>Save Time</h2></div>
          <div><p style={{textAlign: 'center', color: '#525C65'}}>Save time, rather than spending your day in the mall, find your item on illuba and directly go the right store</p></div>
        </div>

        <div style={styles.serviceWrapper}>
          <div style={styles.serviceImage}><img alt="currency" src={dollar} style={{width: '40%'}}/></div>
          <div><h2 style={{color: colors.iPurple, textAlign: 'center', margin: '0px'}}>Save Money</h2></div>
          <div><p style={{textAlign: 'center', color: '#525C65'}}>Save money, sort your search based on price, find best deals, save money on transportation and get notified of sales.</p></div>
        </div>
        
      </div>
    );
  }
}

const styles = {
  serviceWrapper: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '8px'
  },
  serviceImage: {
    width: '70px',
    height: '70px',
    borderRadius: '100%',
    display: 'flex',
    marginBottom: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '8px 10px 20px 0px rgba(46,61,73,0.15)',
  }

}

export default connect(
  mapStateToProps,
)(Service);