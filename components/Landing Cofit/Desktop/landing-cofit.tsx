import React, {ReactElement} from 'react';
import Image from 'next/image';
import styles from './landing-cofit.module.css';
import {Grid} from '@material-ui/core';
import {ChevronRight} from '@material-ui/icons';

export default function landingCofit(): ReactElement {
  return (
    <Grid className={styles.container} item container sm={12} md={6}>
      <Grid className={styles.content}>
        <Grid item xs={7}>
          <p className={styles.title}>COFIT</p>
          <p className={styles.subtitle}>
            Tidak bisa ke Megafit? Jangan khawatir & gunakan program coaching
            online Megafit. Olahraga dirumah saja.
          </p>
          <Grid className={styles.chevron_wrapper}>
            <a
              href='http://www.tokopedia.com/megafit'
              target='_blank'
              rel='noopener noreferrer'
            >
              Info Lanjut
            </a>
            <ChevronRight style={{marginTop: -4, fontSize: 28}} />
          </Grid>
        </Grid>
        <Grid item xs={5} className={styles.image_wrapper}>
          <Image
            src='/landing-cofit.png'
            alt='landing cofit'
            layout='intrinsic'
            width={160}
            height={179}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}