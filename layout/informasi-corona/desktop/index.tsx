import {Grid} from '@material-ui/core';
import Image from 'next/image';
import React, {ReactElement} from 'react';
import Navbar from '../../../components/Navbar/Home/Home';
import Navside from '../../../components/Navigasi Informasi Corona';
import Content from '../../../components/Informasi Corona Content';
import styles from './desktop.module.css';
import Footer from '../../../components/Footer/footer';

export default function informasiCoronaDekstopView(): ReactElement {
  return (
    <Grid>
      <Navbar />
      <Grid className={styles.image_wrapper}>
        <Image
          src='/banner-informasi-corona.png'
          alt='banner'
          layout='intrinsic'
          width={1920}
          height={500.73}
        />
      </Grid>
      <Grid container>
        <Navside />
        <Content />
      </Grid>
      <Footer />
    </Grid>
  );
}
