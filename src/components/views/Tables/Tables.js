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

const intervals = ['12:00', '12:30', '13:00'];

const tables = [
  {id: 1, bookings: {
    '12:00': {hour: '12:00', booked: true},
    '12:30': {hour: '12:30', booked: true},
    '13:00': {hour: '13:00', booked: true},
  }},
  {id: 2, bookings: {
    '12:00': {hour: '12:00', booked: true},
    '12:30': {hour: '12:30', booked: false},
    '13:00': {hour: '13:00', booked: true},
  }},
  {id: 3, bookings: {
    '12:00': {hour: '12:00', booked: true},
    '12:30': {hour: '12:30', booked: false},
    '13:00': {hour: '13:00', booked: false},
  }},
  {id: 4, bookings: {
    '12:00': {hour: '12:00', booked: true},
    '12:30': {hour: '12:30', booked: true},
    '13:00': {hour: '13:00', booked: true},
  }},
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
            </TableRow>
          </TableHead>
          <TableBody>
            
          </TableBody>
        </Table>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Button>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>Bookings info</Link>
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Button>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/${id}`}>Events info</Link>
      </Paper>
    </Container>
  );
};

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
