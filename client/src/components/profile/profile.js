import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Profileader from './profile_header';
import Header from '../Header';
import ProfileItems from './profile_items';
import ProfileInfo from './profile_info';
import ProfileAdditem from './profile_additem';
import ProfileEdit from './profile_edit';
import ContentAside from '../contentAside';
import {Tabs, Tab} from 'material-ui/Tabs';
import { colors } from '../../consts/baseStyles';
import { Redirect } from 'react-router-dom';


function mapStateToProps(state) {
  return {
  };
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {}, items: [], requestDone: false, tab: 'productsTab', isOwner: false, 
                  userNotFound: false, isLoggedIn: false}
  }

  render() {
    return (
      <div>
        {(this.state.userNotFound) ? <Redirect to="/"/> : ""}
        {(this.state.requestDone && !this.state.userNotFound) ? 
          <div>
            <Header />
            <Profileader user={this.state.user}/>

            <div style={{display: 'flex', marginTop: '100px'}}>
              <div className="content-main" style={{width: '76%', padding: '0 2% 2% 2%', boxSizing: 'border-box'}}>
                <Tabs
                  value={this.state.tab}
                  onChange={value => {this.setState({tab: value})}}
                  inkBarStyle={{backgroundColor: colors.iGreen}}
                  tabItemContainerStyle={styles.tab}
                >
                  <Tab label="Products" value="productsTab" style={{color: colors.iGreen}} >
                    <div>
                      <ProfileItems user={this.state.user}/>
                    </div>
                  </Tab>
                  <Tab label="Info" value="infoTab" style={{color: colors.iGreen}} >
                    <div>
                      <ProfileInfo user={this.state.user}/>
                    </div>
                  </Tab>
                  {this.getOwnerData()}
                </Tabs>
              </div>

              <ContentAside/>
            </div>

          </div>
          : ""
        }
      </div>
    );
  }

  
  componentWillMount() {
    this.requestForUser(this.props.match.params.username);
  }

  componentWillReceiveProps(nextProps) {
    this.requestForUser(nextProps.match.params.username);
  }

  requestForUser(param) {
    axios.get('/' + param)
    .then((res) => {
      this.setState({
        user: res.data.user, requestDone: true, isOwner: res.data.isOwner, 
        userNotFound: res.data.userNotFound, isLoggedIn: res.data.isLoggedIn
      });
    })
    .catch((err) => {console.log("Failed getting user logged in, in profile")})
  }

  aram(e) {console.log(e)}

  getOwnerData() {
    if (this.state.isOwner) {
      return [
        <Tab key="additem" label="Add Item" value="additemTab" style={{color: colors.iGreen}} >
          <div style={{marginTop: '16px'}}>
            <ProfileAdditem user={this.state.user} itemAdded={this.aram(this.props.match.params.username)}/>
          </div>
        </Tab>
        ,
        <Tab key="profileedit" label="Profile" value="profileTab" style={{color: colors.iGreen}} >
        <div style={{marginTop: '16px'}}>
          <ProfileEdit user={this.state.user}/>
        </div>
      </Tab>
      ];
    }
  }
}

const styles = {
  tab: {
    backgroundColor: 'rgba(44, 212, 217, .1)', 
    color: colors.iGreen, 
    borderRadius: '8px 8px 0 0'
  }
}

export default connect(
  mapStateToProps,
)(Profile);