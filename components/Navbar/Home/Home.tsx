import React, {ReactElement} from 'react';
import {AppBar, Toolbar, Grid} from '@material-ui/core';
import {useRouter} from 'next/router';
import Image from 'next/image';
import styles from './Home.module.css';

interface Props {
  onlyLogo?: Boolean;
}

export default function Navbar(props: Props): ReactElement {
  const router = useRouter();

  return (
    <AppBar position='fixed' className={styles.appbar}>
      <Toolbar
        className={`${styles.toolbar} ${props.onlyLogo && styles.onlyLogo}`}
      >
        <Image
          className={styles.image}
          src='/logo.png'
          alt='logo'
          layout='intrinsic'
          width={226.59}
          height={30}
          onClick={() => router.push('/')}
        />
        <Grid className={styles.link_wrapper}>
          {!props.onlyLogo && (
            <>
              <p
                className={styles.link}
                onClick={() =>
                  window.open(
                    `https://api.whatsapp.com/send?phone=6281317762785&text=Halo,%20customer%20service%20megafit.`,
                  )
                }
              >
                Konsultasi Dulu
              </p>
              <p className={styles.link}>Free Trial</p>
              <p className={styles.link}>1 Day Pass</p>
              <p className={styles.link}>Private Gym</p>
              <p className={styles.link}>Bergabung</p>
              <p className={styles.link} onClick={() => router.push('/login')}>
                Login
              </p>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
