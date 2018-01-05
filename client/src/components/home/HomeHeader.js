import React from 'react';
// import { colors } from '../../consts/baseStyles'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../../res/css/home/header.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false}
  }

  componentWillMount() {
    axios.get('/getuser')
    .then((res) => {
      this.setState({isLoggedIn: res.data.isLoggedIn})
    })
    .catch((err) => {console.log("Failed getting signout")})
  }

  signOut() {
    axios.get('/users/signout')
    .then((res) => {this.setState({isLoggedIn: false})})
    .catch((err) => {console.log("Failed Signing Out")})
  }

  isLoggedIn() {
    if(!this.state.isLoggedIn)
      return <li><Link to={'/login'} className="header-link">LOGIN</Link></li>
    else
      return <li><Link onClick={() => this.signOut()} to="/" className="header-link">SIGNOUT</Link></li>
  }

  render() {
    return (
      <div className="header-wrapper">
        <ul>
          <li><Link to={'/'} className="header-title">illuba</Link></li>
          <div className="header-links-wrapper">
            <li><Link to={'/search'} className="header-link">SEARCH</Link></li>
            {this.isLoggedIn()}
          </div>
        </ul>
      </div>
    )
  }
}