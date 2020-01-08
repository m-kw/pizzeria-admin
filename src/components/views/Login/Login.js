import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <Container maxWidth='lg'>
      <form className={styles.component} autoComplete="off">
        <TextField
          className={styles.textField}
          required
          id="login"
          label="Login"
        />
        <TextField
          className={styles.textField}
          required
          id="password"
          label="Password"
          type="password"
        />
        <Button className={styles.button} variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/`}>
          LOGIN
        </Button>
      </form>
    </Container>
  );
};

export default Login;
