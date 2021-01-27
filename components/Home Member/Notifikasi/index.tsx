import React, {ReactElement} from 'react';
import {Grid} from '@material-ui/core';
import {Announcement} from '@material-ui/icons';
import styles from './style.module.css';

export default function NotifikasiMember(): ReactElement {
  return (
    <Grid container alignItems='center' className={styles.container}>
      <Announcement />
      <p className={styles.text}>
        <b>Notifikasi :</b> Ayo reservasi fitur private gym di esok hari dan
        nikmati seluruh fasilitas untuk diri sendiri.
      </p>
    </Grid>
  );
}
