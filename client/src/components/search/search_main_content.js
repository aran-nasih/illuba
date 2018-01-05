import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ProfileCard from '../profile_card'
import {style, colors} from '../../consts/baseStyles';
import axios from 'axios';
import ItemCard from '../itemCard';

export default class SearchContentMain extends Component {
  constructor(props) {
    super(props);
    this.state = {searchInput: '', arrayOfItems: [], arrayOfProfiles: []}
  }
  
  render() {
    return (
      <div>
        <div>
          <form onSubmit={(e) => {this.searchWithText(e)}}>
            <h3 className="header-text">Search for item, store or hashtag</h3>
            <div style={{width: '300px',}}>
              <TextField
                required="true"
                style={style.baseTextInput}
                onChange={(obj, newValue) => {this.setState({searchInput: newValue})}}
                value={this.state.searchInput}
                floatingLabelText="Search"
                floatingLabelStyle={{color: '#9E9E9E'}}
                floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
                underlineStyle={{borderColor: '#BDBDBD'}}
                />
            </div>
          </form>

          <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '10px'}}>
            {this.getItems()}
            {this.getProfiles()}
          </div>

        </div>
      </div>
    );
  }
  
  componentWillMount() {
    this.checkQuery(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    this.checkQuery(nextProps.query)
  }

  checkQuery(query) {
    if (query) {
      if (query.startsWith('hashtag'))
        query = query.replace('hashtag', '#')
      this.setState({searchInput: query});
      setTimeout(() => this.searchWithText(), 10) 
    }
  }

  searchWithText(e) {
    if (e) e.preventDefault();
    if (this.state.searchInput.startsWith('#')) {
      this.searchWithHashtag();
    } else {
      this.searchWithQuery();
    }
  }

  searchWithQuery() {
    axios.post('/search/getquery', {query: this.state.searchInput})
    .then((res) => {
      this.setState({arrayOfItems: res.data.items, arrayOfProfiles: res.data.profiles});
    })
    .catch((err) => {if (err) console.log("Failed searching for items and profiles")})
  }

  searchWithHashtag() {
    if (this.state.searchInput.charAt(0) === '#') {
      let words = this.state.searchInput.split(' ');
      const tag = words[0].substring(1, words[0].length);
      axios.post('/search/gettag', {hashtag: tag})
      .then((res) => {
        this.setState({arrayOfItems: res.data.items});
      })
      .catch((err) => {if (err) console.log("failed getting hashtag items")})
    }
  }

  getItems() {
    const items = this.state.arrayOfItems.map((item) => {
      return <ItemCard key={item._id} item={item} />
    })
    return items
  }

  getProfiles() {
    const profiles = this.state.arrayOfProfiles.map((profile) => {
      return <ProfileCard key={profile._id} profile={profile} />
    })
    return profiles
  }

}

