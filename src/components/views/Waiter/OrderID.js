import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const OrderID = ({ match }) => {
  return (
    <div className={styles.subcomponent}>
      <h2>Order ID view</h2>
      <span className={styles.id}>{match.params.id}</span>
    </div>
  );
};

OrderID.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default OrderID;
