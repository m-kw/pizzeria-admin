import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OrderNew from './OrderNew';
import OrderID from './OrderID';
import styles from './Waiter.scss';

const Waiter = ({ id }) => {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/${id}`}>Order ID</Link>

      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew}/>
        <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderID}/>
      </Switch>
    </div>
  );
};

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;
