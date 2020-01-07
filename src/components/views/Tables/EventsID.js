import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const EventsID = ({ match }) => {
  return (
    <div className={styles.component}>
      <h2>EventsID view</h2>
      <span className={styles.id}>{match.params.id}</span>
    </div>
  );
};

EventsID.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default EventsID;
