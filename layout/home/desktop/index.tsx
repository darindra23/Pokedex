import React, {ReactElement} from 'react';
import {Grid, Typography} from '@material-ui/core';
import styles from './style.module.css';
import NavbarMemberDesktop from '../../../components/Home Member/Navbar Member/Desktop';
import NotifikasiMember from '../../../components/Home Member/Notifikasi';

export default function DekstopMobile(): ReactElement {
  return (
    <Grid>
      <NavbarMemberDesktop />
      <NotifikasiMember />
      <Grid container className={styles.body}>
        <Typography className={styles.title} variant='h4'>
          Hi Joe, ayo kita mulai sehat bareng.
        </Typography>
      </Grid>
    </Grid>
  );
}
