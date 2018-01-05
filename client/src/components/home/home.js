import React from 'react';
import {Link} from 'react-router-dom'
import homeBg from '../../res/images/home_background.png';
import TopSection from './topSection'
import Services from './services'
import Category from './category'
import JoinBar from './joinBar'
import ContentMain from './contentMain'
import ContactAside from '../contentAside'
import HomeHeader from './HomeHeader'
import '../../res/css/home/home.css'
// import { colors } from '../../consts/baseStyles';

export default class Home extends React.Component{
  render() {
    return (
      <div>
        <HomeHeader />
        <img src={homeBg} alt="home background" className="bg-image"/>
        <div className="home-wrapper">
          <TopSection/>
          <Services/>
        </div>
        <div style={{marginTop: '100px', marginBottom: '100px', paddingLeft: '4%', paddingRight: '4%'}}>
          <Category/>
          <Link to={'/'} className="see-more-link">See More</Link>
        </div>
        <JoinBar/> 
        <div style={styles.contentWrapper}>
          <ContentMain />
          <ContactAside />
        </div>
      </div>
    )
  }
}

export const styles = {
  contentWrapper: {
    display: 'flex',
    marginTop: '100px'
  }
}