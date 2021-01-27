import React, {ReactElement} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './informasi-corona-mobile.module.css';
import {Grid} from '@material-ui/core';
import {ChevronRight} from '@material-ui/icons';

export default function informasiCoronaMobile(): ReactElement {
  return (
    <Grid className={styles.container} item container sm={12} md={6}>
      <Grid className={styles.content}>
        <Grid className={styles.image_wrapper}>
          <Image
            src='/informasi-corona.png'
            alt='informasi corona'
            layout='intrinsic'
            width={217.5}
            height={154.64}
          />
        </Grid>
        <Grid className={styles.text_wrapper}>
          <p className={styles.title}>Informasi Virus Corona</p>
          <p className={styles.subtitle}>
            Dapatkan informasi terbaru seputar corona virus & operasional
            Megafit serta langkah pencegahan di halaman informasi ini.
          </p>
          <Grid className={styles.chevron_wrapper}>
            <Link href='/informasi-corona'>
              <a>Info Lanjut</a>
            </Link>
            <ChevronRight style={{marginTop: -4, marginLeft: -3}} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
