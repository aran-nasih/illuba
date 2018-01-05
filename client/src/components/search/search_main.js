import React, { Component } from 'react';
import Header from '../Header'
import ContentAside from '../contentAside'
import SearchMainContent from './search_main_content'

export default class SearchMain extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header page="search"/>
        <div style={{display: 'flex', marginTop: '40px'}}>
          <div className="content-main" style={{width: '76%', padding: '0 2% 2% 2%', boxSizing: 'border-box'}}>
            <SearchMainContent query={this.props.match.params.query}/>
          </div>
          <ContentAside/>
        </div>
      </div>
    );
  }
}

