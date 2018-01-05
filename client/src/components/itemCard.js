import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { colors } from '../consts/baseStyles';

function mapStateToProps(state) {
  return {

  };
}

class componentName extends Component {
  render() {
    const item = this.props.item; 
    return (      
      <div style={styles.wrapper} className="item-card">
        <div style={styles.imageWrapper}><img src={this.props.itemImage} alt="Item" style={styles.image}/></div>
        
        <div style={styles.bottom}>
          <div><Link to={"/" + this.props.item.itemOwnerUsername + "/" + item._id} style={{fontSize: '1.2em', fontWeight: 'bolder'}} className="header-text">{item.itemName}</Link></div>
          
          <div style={styles.infoWrapper}>
            <p className="paragraph-text">{item.itemPrice}$</p>
            <p className="paragraph-text" style={{marginLeft: 'auto'}}>{item.itemCity}</p>
          </div>

          <div style={{width: '100%', overflow: 'hidden'}}>{this.getTags()}</div>
        </div>        
      </div>
    );
  }

  getTags() {
    const tagLinks = this.props.item.itemTags.map((tag) => {
      if (tag !== '' || tag !== ' ' || tag !== undefined) {
        return (
          <Link key={tag} style={{color: colors.iGreen, marginRight: '4px'}} className="header-text" to={`/search/hashtag${tag}`}>#{tag}</Link>
        )
      }
    })
    return tagLinks;
  }

}

const styles = {
  wrapper: {
    width: '250px',
    height: '330px',
    backgroundColor: 'white',
    boxShadow: '5px 5px 25px 0px rgba(46,61,73,0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'all .3s ease',
    marginRight: '2%'
  },
  
  imageWrapper: {
    width: '100%',
    height: '74%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  
  image: {
    width: '100%',
  },
  
  infoWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  
  bottom: {
    height: '26%',
    padding: '8px 16px 16px 16px',
  }
}

export default connect(
  mapStateToProps,
)(componentName);