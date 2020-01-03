import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Order.scss';

const Order = ({ id }) => {
  return (
    <div className={styles.component}>
      <h2>Order view</h2>
      <Link to={`${process.env.PUBLIC_URL}/order/new`}>New order</Link>
      <Link to={`${process.env.PUBLIC_URL}/order/${id}`}>Order ID</Link>
    </div>
  );
};

Order.propTypes = {
  id: PropTypes.string,
};

export default Order;
