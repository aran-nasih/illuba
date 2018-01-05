  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import ItemCard from '../itemCard';
  import axios from 'axios';

  function mapStateToProps(state) {
    return {
  
    };
  }
  
  class ProfileItems extends Component {
    constructor(props) {
      super(props);
      this.state = {items: []}
    }

    componentWillMount() {
      this.requestItems(this.props.user.username);
    }

    componentWillReceiveProps(nextProps) {
      this.requestItems(nextProps.user.username)
    }

    requestItems(usernameProps) {
      axios.get('/' + usernameProps + '/items')
      .then((res) => {
        this.setState({items: res.data.items})
      }).catch((err) => {if(err) console.log("Failed gettin items of user " + this.props.user.username)})
    }

    getItems() {
      const items = this.state.items.map(item => <ItemCard key={item._id} item={item}/>)
      return items;
    }
   
    render() {
      return (
        <div style={styles.wrapper}>
          {this.getItems()}
        </div>
      );
    }
  }

  const styles = {
    wrapper: {
      display : 'flex',
      flexWrap: 'wrap',
      marginTop: '16px'
    }
  }
  
  export default connect(
    mapStateToProps,
  )(ProfileItems);