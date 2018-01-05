import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {storeName: '', storeAddress: '', numberOfItems: 0, username: '/'}
  }
  
  render() {
    return (
      <div style={{width: 'auto', display: 'inline-block'}}>
        <Link to={'/' + this.state.username}>
          <div className="card-1 res-full card-hover-shadow" style={styles.card}>
            <div>
            </div>

            <div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p className="paragraph-text">{this.state.storeName}</p>
                <p className="paragraph-text">{this.state.numberOfItems}</p>
              </div>
              <p className="paragraph-text">{this.state.storeAddress}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  
  componentWillMount() {
    const props = this.props.profile;
    if (props)
      this.setState({storeName: props.storeName, storeAddress: props.storeAddress, 
        numberOfItems: props.items.length, username: props.username});

  }
}

const styles = {
  card: {
    width: 'auto',
    padding: '8px 16px',
    display: 'flex'
  }
}