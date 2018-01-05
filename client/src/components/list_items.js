import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { style } from '../consts/baseStyles'

class ListView extends Component {
  renderList() {
    const { listItems, previewItem } = this.props;
    return Object.keys(listItems).map((key) => {
      const item = listItems[key];
      return (
        <li
          key={item.name}
        >
          <button onClick={() => previewItem(item.name)} style={style.primaryButton}>{ item.name }</button>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>
          { this.renderList() }
        </ul>
      </div>
    );
  }
}

ListView.propTypes = {
  listItems: PropTypes.object.isRequired,
  previewItem: PropTypes.func.isRequired,
};

export default ListView;
