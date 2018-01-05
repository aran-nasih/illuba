import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { style } from '../consts/baseStyles'

const ListItemPreview = ({ item }) => {
  if (!item) {
    return (
      <div>
        <h3>Select an item</h3>
        <p>Description will appear here</p>
      </div>
    );
  }
  return (
    <div>
      <h2> { item.name } </h2>
      <p>{ item.description }</p>
      <Link to={`view/${item.name}`}>
        <button type="button" style={style.primaryButton}>Read More</button>
      </Link>
    </div>
  );
};

ListItemPreview.propTypes = {
  item: PropTypes.object,
};

ListItemPreview.defaultProps = {
  item: null,
};

export default ListItemPreview;
