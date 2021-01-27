import React, {ReactElement} from 'react';
import {Grid} from '@material-ui/core';
import styles from './style.module.css';

export default function NavigasiInformasiCorona(): ReactElement {
  return (
    <Grid item sm={3} className={styles.link_wrapper}>
      <Grid className={styles.link}>
        <a href='#info-corona' className={styles.href}>
          Info Corona Virus
        </a>
      </Grid>
      <Grid className={styles.link}>
        <a href='#komitmen' className={styles.href}>
          Komitmen #MegafitAman
        </a>
      </Grid>
      <Grid className={styles.link}>
        <a href='#komitmen' className={styles.href}>
          Bergabung dengan Megafit
        </a>
      </Grid>
      <Grid className={styles.link}>
        <a href='#komitmen' className={styles.href}>
          Bergabung dengan Megafit
        </a>
      </Grid>
    </Grid>
  );
}
