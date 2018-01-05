import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../res/css/home/top-section.css'
import '../../res/css/App.css'

class TopSection extends Component {
  render() {
    return (
      <div className="home-title-wrapper">
        <div className="home-title-header">
          <h2>Do your searching at home directly go to the right store</h2>
        </div>
        <div className="home-title-desc">
          <p>illuba helps you find the product you want with the right specifications, and saves your time searching store by store.</p>
        </div>
        <div className="home-title-desc">
          <Link to={'/'} className="base-btn base-btn-primary" style={{marginTop: '8px'}}>SEARCH</Link>
        </div>
      </div>
    );
  }
}

export default TopSection;