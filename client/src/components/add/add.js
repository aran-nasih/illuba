import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import {style, colors} from '../../consts/baseStyles';

function mapStateToProps(state) {
  return {

  };
}

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {itemName: '', itemPrice: 0, itemCity: '', itemTags: '', itemColor: ''}
  }

  submitItem(e) {
    e.preventDefault();
    // let reqBody = {itemName: this.state.itemName};
    let state = this.state;

    axios.post("/additem",{
      data: {name: state.itemName, price: state.itemPrice, city: state.itemCity, tags: state.itemTags, color: state.itemColor}
    }).then((response)=> {
      console.log("Data submitted successfully");
    }).catch((error)=> {
      console.log("got errr while posting data", error);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitItem(e)}>
          <TextField
            name="name"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({itemName: newValue})}
            value={this.state.itemName}
            floatingLabelText="Item Name"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
            />

            <TextField
            name="price"   
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
            name="city"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({itemCity: newValue})}
            value={this.state.itemCity}
            floatingLabelText="Item City"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
            />

          <TextField
            name="tags"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({itemTags: newValue})}
            value={this.state.itemTags}
            floatingLabelText="Item Tags"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />

          <TextField
            name="color"
            style={style.baseTextInput}
            onChange={(obj, newValue) => this.setState({itemColor: newValue})}
            value={this.state.itemColor}
            floatingLabelText="Item Color"
            floatingLabelStyle={{color: '#9E9E9E'}}
            floatingLabelShrinkStyle={{color: colors.iGreen, fontSize: '1.2em'}}
            underlineStyle={{borderColor: '#BDBDBD'}}
          />
          <button className="base-btn base-btn-primary" type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Add);