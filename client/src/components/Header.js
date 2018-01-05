import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Search from './search'
import {colors} from '../consts/baseStyles'
import axios from 'axios'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false, user: {}}
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.container} className="header-main">

          <div style={styles.titleWrapper}>
            <Link className="header-title" to='/' style={styles.title}>illuba</Link>
          </div>
        
          {(this.props.page !== 'search') ? 
            <div style={{width: '40%'}} className="header-search-main">
              <Search />
            </div>
            : "" 
          }

          <div style={{}}>
            <Link key="search" to={'/search'} style={styles.link} className="header-link">Search</Link>
            {this.isLoggedIn()}
          </div>

        </div>
      </div>
    );
  }

  componentWillMount() {
    axios.get('/getuser')
    .then((res) => {this.setState({user: res.data.user, isLoggedIn: res.data.isLoggedIn})})
    .catch((err) => {if (err) console.log("Failed Getting user for header")});
  }

  signOut() { 
    axios.get('/users/signout')
    .then((res) => {this.setState({isLoggedIn: false})})
    .catch((err) => {console.log("Failed Signing Out")})
  }

  isLoggedIn() {
    if(!this.state.isLoggedIn) 
      return <Link style={styles.link} onClick={() => this.signOut()} to="/login" className="header-link">Login</Link>
    else
      return <Link to={'/' + this.state.user.username} style={styles.link} className="header-link">Profile</Link>
  }

}

const styles = {
  wrapper: {
    height: '60px'
  },

  container: {
    overflow: 'hidden',
    width: '100%',
    padding: '0 8%',
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    background: '#fff',
    marginBottom: '80px',
    boxSizing: 'border-box',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.1)',
    position: 'fixed',
    zIndex: '1000',
    justifyContent: 'space-between'
  },

  titleWrapper: {

  },

  title: {
    margin: '0px'
  },

  link: {
    color: colors.iGreen,
    fontSize: '.9em',
    fontWeight: 'bolder'
  }
}