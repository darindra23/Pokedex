import {Grid} from '@material-ui/core';
import React, {ReactElement} from 'react';
import styles from './desktop.module.css';
import Navbar from '../../../components/Navbar/Home/Home';
import Image from 'next/image';
import InformasiCorona from '../../../components/Informasi Corona/Desktop/informasi-corona';
import Cofit from '../../../components/Landing Cofit/Desktop/landing-cofit';
import Footer from '../../../components/Footer/footer';

export default function desktop(): ReactElement {
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
