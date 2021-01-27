import React, {ReactElement, useState} from 'react';
import dynamic from 'next/dynamic';
import styles from './footer.module.css';
import {isMobile} from 'react-device-detect';
import {Grid} from '@material-ui/core';

const ModalKebijakanLegal = dynamic(import('../Modal/Modal Kebijakan Legal'));
const ModalKebijakanCookie = dynamic(import('../Modal/Modal Kebijakan Cookie'));

export default function Footer(): ReactElement {
  interface State {
    [key: string]: any;
  }

  const [state, setState] = useState<State>({
    kebijakanLegal: false,
    kebijakanCookie: false,
  });

  const handleModal = (modal: string) => {
    setState({...state, [modal]: !state[modal]});
  };

  return (
    <Grid className={`${styles.container} ${!isMobile && styles.desktop}`}>
      <p className={styles.text} onClick={() => handleModal('kebijakanLegal')}>
        Kebijakan Legal
      </p>
      <p
        className={`${styles.text} ${!isMobile && styles.text_desktop}`}
        onClick={() => handleModal('kebijakanCookie')}
      >
        Kebijakan Pribadi & Cookie
      </p>
      <p
        className={`${styles.text} ${!isMobile && styles.text_desktop}`}
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=6281317762785&text=Halo,%20customer%20service%20megafit.`,
          )
        }
      >
        Hubungi Kami
      </p>

      <ModalKebijakanLegal
        open={state.kebijakanLegal}
        close={() => handleModal('kebijakanLegal')}
      />
      <ModalKebijakanCookie
        open={state.kebijakanCookie}
        close={() => handleModal('kebijakanCookie')}
      />
    </Grid>
  );
}
