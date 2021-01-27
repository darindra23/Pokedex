/* eslint-disable max-len */
import React, {ReactElement} from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps): ReactElement {
  return (
    <React.Fragment>
      <Head>
        <meta
          name='description'
          content='Mulai perjalanan sehat di Megafit - Pusat kebugaran terbesar di Green Lake City Tangerang. Gym dengan alat terlengkap, kelas terbaik dan Personal Trainer berkualifikasi terdekat di lokasi anda.'
        />
        <meta
          property='og:title'
          content='Megafit Official Site: Fitness center terbesar di Green Lake City'
        />
        <meta property='og:url' content='http://megafit.co.id/' />
        <meta property='og:image' content='/index.jpg' />
        <meta
          property='og:description'
          content='Mulai perjalanan sehat di Megafit - Pusat kebugaran terbesar di Green Lake City Tangerang. Gym dengan alat terlengkap, kelas terbaik dan Personal Trainer berkualifikasi terdekat di lokasi anda.'
        />

        <title>Megafit</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
