import React, {ReactElement} from 'react';
import {AccountCircle, ExitToApp} from '@material-ui/icons';
import {Grid} from '@material-ui/core';
import Image from 'next/image';
import styles from './style.module.css';

export default function NavbarMemberDesktop(): ReactElement {
  return (
    <Grid className={styles.topbar}>
      <Grid className={styles.icon_wrapper}>
        <AccountCircle className={styles.icon} />
        <p>Profil</p>
      </Grid>
      <Image
        src='/logo.png'
        alt='logo'
        layout='fixed'
        width={226.59}
        height={30}
      />
      <Grid className={styles.icon_wrapper}>
        <p>Keluar</p>
        <ExitToApp className={styles.icon} />
      </Grid>
    </Grid>
  );
}
