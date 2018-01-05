import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {searchInput: '', redirectSearchPage: false}
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.search(e)}}>
          <input className="search-input" type="Search" placeholder="Search for item or shop..." 
          onChange={(val) => {this.setState({searchInput: val.target.value})}} style={styles.searchInput}/>
        </form>
        {this.state.redirectSearchPage ? <Redirect to={'/search/' + this.state.searchInput} params={{s: 'aran'}}/>: ""}
      </div>
    );
  }

  search(e) {
    if (this.state.searchInput.charAt(0) === '#') {
      let hashtagQuery = this.state.searchInput.replace('#', 'hashtag');
      this.setState({searchInput: hashtagQuery});
    }
    this.setState({redirectSearchPage: true});
  }
}

const styles = {
  searchInput: {
    height: '40px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '6px',
    outline: 'none',
    border: 'none',
    padding: '0 16px',
    transition: 'all .2s ease',
    boxShadow: 'rgba(169, 81, 237, .3) 1px 1px 10px 0px',
    color: '#5C27CE'
  }
}

