import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = ({ id }) => {
  return (
    <Container>
      <Toolbar />
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Link to={`${process.env.PUBLIC_URL}/waiter/order/${id}`}>{row.id}</Link>
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.order && (
                    <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                      {row.order}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {renderActions(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Fab variant="extended" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
          <AddIcon />
          New order
        </Fab>
      </Paper>
    </Container>
  );
};

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;
