import {Grid} from '@material-ui/core';
import React, {ReactElement} from 'react';
import Navbar from '../../../components/Navbar/Home-Mobile/Home-Mobile';
import styles from './mobile.module.css';
import Image from 'next/image';
import Content from '../../../components/Informasi Corona Content';
import Footer from '../../../components/Footer/footer';

export default function informasiCoronaMobileView(): ReactElement {
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
        <Content />
      </Grid>
      <Footer />
    </Grid>
  );
}
