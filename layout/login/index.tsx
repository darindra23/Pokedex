import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import React, {ReactElement} from 'react';
import {useRouter} from 'next/router';
import styles from './style.module.css';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';

export default function loginView(): ReactElement {
  const router = useRouter();

  return (
    <Grid className={styles.main}>
      <Grid container className={styles.container}>
        <Grid item xs={8} md={3} className={styles.content_wrapper}>
          <Grid className={styles.image_wrapper}>
            <Image
              src='/logo.png'
              layout='intrinsic'
              width={480}
              height={60}
              onClick={() => router.push('/')}
            />
          </Grid>
          <form noValidate autoComplete='off' className={styles.form}>
            <TextField
              id='username'
              label='Username'
              margin='normal'
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
              style={{marginBottom: 15}}
            />
            <TextField
              id='password'
              label='Password'
              type='password'
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Grid className={styles.link_wrapper}>
              <p
                className={styles.link}
                onClick={() => router.push('/forget-password')}>
                Lupa Password ?
              </p>
              <Button
                className={styles.button}
                type='submit'
                variant='contained'>
                Sign In
              </Button>
            </Grid>
          </form>
          <Typography style={{fontSize: 12}}>2021 - Version 1.1.0</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
