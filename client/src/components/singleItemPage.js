import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';

export default class SingleItemPage extends Component {
  constructor(props) {
    super(props)
    this.state = {item: {}, isOwner: false, routeToHome: false}
  }

  componentWillMount() {

    axios.get('/' + this.props.match.params.username + '/' + this.props.match.params.item)
    .then((res) => {
      this.setState({item: res.data.item, isOwner: res.data.isOwner});  
    })
    .catch((err) => {console.log("Failed getting specific item")})
  }

  removeItem(e) {
    axios.post('/' + this.props.match.params.username + '/' + this.props.match.params.item + '/delete', {
      item: this.state.item
    })
    .then((res) => {
      if (res.data.deleted) {
        this.setState({routeToHome: true})
      }
    })
    .catch((err) => {console.log("Failed Deleting item")})
  }

  render() {
    return (
      <div>
        {(this.state.isOwner) ? <button className="base-btn base-btn-primary" onClick={(e) => {this.removeItem(e)}}>DELETE</button> : ""}
        {this.state.item.itemName}
        {this.state.isOwner}
        <Link to={'/' + this.state.item.itemOwnerUsername} >User Profile </Link>
        {(this.state.routeToHome) ? <Redirect to='/'/> : ""}
      </div>
    );
  }
}

