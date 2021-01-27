import {Button, Grid, TextField} from '@material-ui/core';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React, {ReactElement, useState} from 'react';
import {isMobile} from 'react-device-detect';
import swal from 'sweetalert';
import {API} from '../../config/axios';
import styles from './styles.module.css';

export default function forgetPasswordView(): ReactElement {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [proses, setProses] = useState(false);

  const submit = async () => {
    try {
      setProses(true);
      await API.get(`/users/forget-password?email=${email}`);
      if (isMobile) {
        swal(
          'Email Terkirim.',
          'Silahkan cek email anda untuk mengubah password',
          {
            icon: 'success',
            buttons: [false, false],
            timer: 2000,
            className: 'swal-mobile',
          },
        );
      } else {
        swal(
          'Email terkirim',
          'Silahkan cek email anda untuk mengubah password',
          {
            icon: 'success',
          },
        );
      }
      router.push('/login');
      setProses(false);
    } catch (err) {
      setProses(false);
      if (err.response.status === 400) {
        if (isMobile) {
          swal(
            'Email Tidak Terdaftar',
            'Mohon periksa kembali alamat email anda.',
            {
              icon: 'warning',
              buttons: [false, false],
              timer: 2000,
              className: 'swal-mobile',
            },
          );
        } else {
          swal(
            'Email Tidak Terdaftar',
            'Mohon periksa kembali alamat email yang anda input.',
            'warning',
          );
        }
      } else {
        if (isMobile) {
          swal(
            'Mohon Ulangi Kembali',
            'Mohon ulangi kembali ada gangguan pada jaringan',
            {
              icon: 'error',
              buttons: [false, false],
              timer: 2000,
              className: 'swal-mobile',
            },
          );
        } else {
          swal(
            'Mohon ulangi kembali',
            'Mohon ulangi kembali ada gangguan pada jaringan',
            'error',
          );
        }
      }
    }
  };

  return (
    <Grid className={styles.main}>
      <Grid container justify='space-evenly'>
        <Grid>
          <Image
            src='/forget-password.png'
            alt='logo-forget-password'
            layout='intrinsic'
            width={400}
            height={400}
          />
        </Grid>
        <Grid className={styles.form_wrapper}>
          <p className={styles.title}>Lupa Password</p>
          <TextField
            id='email'
            label='Email'
            margin='normal'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={styles.button}
            disabled={proses}
            onClick={submit}
          >
            reset password
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
