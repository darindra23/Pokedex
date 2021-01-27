import React, {ReactElement} from 'react';
import styles from './mobile.module.css';
import Image from 'next/image';
import Navbar from '../../../components/Navbar/Home-Mobile/Home-Mobile';
import InformasiCorona from '../../../components/Informasi Corona/Mobile/informasi-corona-mobile';
import Cofit from '../../../components/Landing Cofit/Mobile/landing-cofit-mobile';
import Footer from '../../../components/Footer/footer';

import {Grid} from '@material-ui/core';

export default function Mobile(): ReactElement {
  return (
    <Grid className={styles.main}>
      <Navbar />
      <Grid className={styles.image_wrapper}>
        <Image
          src='/banner.png'
          alt='banner'
          layout='intrinsic'
          width={1920}
          height={643}
        />
      </Grid>
      <Grid container className={styles.info_container}>
        <InformasiCorona />
        <Cofit />
      </Grid>
      <Grid className={styles.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
}
