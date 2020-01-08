import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import styles from './Tables.module.scss';

const demoContent = [
  {hour: '12:00', table: 1, tableStatus:'booked'},
  {hour: '12:30', tableStatus: null},
  {hour: '13:00', tableStatus: null},
  {hour: '13:30', tableStatus: 'event'},
];

const tables = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
];

const Tables = ({ id }) => {
  return (
    <Container maxWidth='lg'>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour/Table</TableCell>
              {tables.map(table => (
                <TableCell key={table.id}>{table.id}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>Bookings info</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/${id}`}>Events info</Link>
      </Paper>
    </Container>
  );
};

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
