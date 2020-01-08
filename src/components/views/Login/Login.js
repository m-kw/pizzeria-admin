import React from 'react';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.component}>
      <h2>Login</h2>
      <form className={styles.form} autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
};

export default Login;
