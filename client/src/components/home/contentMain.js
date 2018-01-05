import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ItemCard from '../itemCard'
// import {gStateUser} from '../../consts/globalState'
import womenTop from '../../res/images/top1.jpg'
// import womenTop1 from '../../res/images/top2.jpg'
// import beats from '../../res/images/beats.jpg'
// import shoes from '../../res/images/shoes.jpg'
// import coat from '../../res/images/coat.jpg'
// import couch from '../../res/images/couch.jpg'
// import flower from '../../res/images/flower.jpg'
// import gucci from '../../res/images/gucci.jpg'
// import {Link} from 'react-router-dom'

function mapStateToProps(state) {
  return {

  };
}

class ContentMain extends Component {
  constructor(props) {
    super(props)
    this.state = {items: []}
  }

  componentWillMount() {
    axios.get('/getitems')
    .then((res) => {
      this.setState({items: res.data.items})
    })
    .catch((error) => {console.log("Failed getting items")})
  }

  getItems() {
    let cards = this.state.items.map((item) => {
      return (
        <ItemCard key={item._id} item={item} itemImage={womenTop} />
      )
    }
    )
    return cards;
  }
  
  render() {
    return (
      <div style={styles.wrapper} className="content-main">
        <div style={styles.container} className="content-main">

          {/* <ItemCard itemName="Leith Dolman Sleeve Sweater" itemImage={womenTop} itemPrice="45" itemCity="Sulaymaniyah" itemTags="hama rahid mahmood hsen"/>
          <ItemCard itemName="Black Old Skool Vans" itemImage={shoes} itemPrice="60" itemCity="Sulaymaniyah" itemTags="hama rahid mahmood hsen"/>
          <ItemCard itemName="Alfani Faux-Leather Jacket" itemImage={coat} itemPrice="120" itemCity="Erbil" itemTags="hama rahid mahmood hsen"/>
          <ItemCard itemName="Beats Solo3 Wireless" itemImage={beats} itemPrice="200" itemCity="Erbil" itemTags="hama rahid mahmood hsen"/>
          <ItemCard itemName="Gucci Embroidered Dragon Hoodie" itemImage={gucci} itemPrice="1450" itemCity="Erbil" itemTags="hama rahid mahmood hsen"/>
          <ItemCard itemName="Morning Melody" itemImage={flower} itemPrice="20" itemCity="Sulaymaniyah" itemTags="hama rahid mahmood hsen"/> */}

          {this.getItems()}
      
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    width: '76%',
    padding: '2%',
    boxSizing: 'border-box'
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
} 

export default connect(
  mapStateToProps,
)(ContentMain);