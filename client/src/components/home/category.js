import React, { Component } from 'react';
import shoes from '../../res/images/catshoes.jpg'
import womenTop from '../../res/images/cattop.jpg'
import mac from '../../res/images/mac.jpg'
import furniture from '../../res/images/furniture.jpg'
import {colors} from '../../consts/baseStyles'

export default class Category extends Component {
  render() {
    return (
      <div style={styles.wrapper}>

        <div style={styles.card} className="category-card-wrapper">
          <div style={styles.imgWrapper}>
            <div style={{height: '100%', width: '100%', position: 'relative', backgroundSize: '100%', backgroundImage: `url(${womenTop})`}}>
              <div style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: colors.iGreen, opacity: '.6'}}></div>
            </div>
          </div>
          <div className="category-card-text">
            <h3>Women Tops</h3>
          </div>
        </div>

        <div style={styles.card} className="category-card-wrapper">
          <div style={styles.imgWrapper}>
            <div style={{height: '100%', width: '100%', position: 'relative', backgroundSize: '100%', backgroundImage: `url(${shoes})`}}>
              <div style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: colors.iPurple, opacity: '.6'}}></div>
            </div>
          </div>
          <div className="category-card-text">
            <h3>Shoes, Vans</h3>
          </div>
        </div>

        <div style={styles.card} className="category-card-wrapper">
          <div style={styles.imgWrapper}>
            <div style={{height: '100%', width: '100%', position: 'relative', backgroundSize: '100%', backgroundImage: `url(${mac})`}}>
              <div style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: colors.iOrange, opacity: '.6'}}></div>
            </div>
          </div>
          <div className="category-card-text">
            <h3>Laptops, Phones</h3>
          </div>
        </div>

        <div style={styles.card} className="category-card-wrapper">
          <div style={styles.imgWrapper}>
            <div style={{height: '100%', width: '100%', position: 'relative', backgroundSize: '100%', backgroundImage: `url(${furniture})`}}>
              <div style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: colors.iDBlue, opacity: '.6'}}></div>
            </div>
          </div>
          <div className="category-card-text">
            <h3>Furnitures</h3>
          </div>
        </div>
      
      </div>
    );
  }
}

const styles = {
  wrapper: {
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  
  card: {
    width: '300px',
    height: '300px',
    boxShadow: '5px 5px 25px 0px rgba(46,61,73,0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    marginBottom: '16px' 
  },

  imgWrapper: {
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  textWrapper: {
    marginLeft: '16px'
  }
}









