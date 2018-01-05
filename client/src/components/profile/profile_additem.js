import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import {style, colors} from '../../consts/baseStyles';
import {Link} from 'react-router-dom'

function mapStateToProps(state) {
  return {

  };
}

class ProfileAdditem extends Component {
  constructor(props) {
    super(props)
    this.state = {itemName: '', itemPrice: 0, itemCity: '', itemTags: [], itemColor: '', tags: ''}
  }

  submitItem(e) {
    e.preventDefault();
    let state = this.state;
    let arrayOfTags = state.tags.split(' ');
    axios.post("/" + this.props.user.username + "/additem", {
      data: {name: state.itemName, price: state.itemPrice, city: state.itemCity, tags: arrayOfTags, color: state.itemColor}
    })
    .then((response) => { this.props.itemAdded.bind(this) })
    .catch((error) => {
      console.log("got errr while posting data", error);
    });
  }

  render() {
    return (
      <div className="card-3 res-full top-sharp-border">
        <div style={{marginLeft:  '16px', color: colors.iGreen}}>
          <h2 className="header-text">Update Profile</h2>
        </div>
        <form onSubmit={(e) => this.submitItem(e)}>
          <TextField
            required="true"
            type="name"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({itemName: newValue})}
            value={this.state.itemName}
            floatingLabelText="Item Name"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <TextField
            required="true"  
            type="number"         
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({itemPrice: newValue})}
            value={this.state.itemPrice}
            floatingLabelText="Item Price"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <TextField
            required="true"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({itemCity: newValue})}
            value={this.state.itemCity}
            floatingLabelText="Item City"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
            />

          <TextField
            required="true"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({tags: newValue})}
            value={this.state.tags}
            floatingLabelText="Item Tags"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <TextField
            required="true"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({itemColor: newValue})}
            value={this.state.itemColor}
            floatingLabelText="Item Color"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />
          <div style={{width: 'auto', margin: '8px 16px'}}>
            <button className="base-btn base-btn-primary" type="submit">ADD</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ProfileAdditem);