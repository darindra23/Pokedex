import React, {ReactElement} from 'react';
import dynamic from 'next/dynamic';
import {isMobile} from 'react-device-detect';
import Loading from '../components/Loading';

const DesktopView = dynamic(import('../layout/informasi-corona/desktop'), {
  loading: () => <Loading loading />,
});
const MobileView = dynamic(import('../layout/informasi-corona/mobile'), {
  loading: () => <Loading loading />,
});

export default function informasiCoronaPage(): ReactElement {
  if (isMobile) return <MobileView />;
  return <DesktopView />;
}
