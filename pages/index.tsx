import React, {ReactElement} from 'react';
import dynamic from 'next/dynamic';
import {isMobile} from 'react-device-detect';
import Loading from '../components/Loading';

const MobileView = dynamic(import('../layout/landing-page/mobile/mobile'), {
  loading: () => <Loading loading />,
});
const DesktopView = dynamic(import('../layout/landing-page/desktop/desktop'), {
  loading: () => <Loading loading />,
});

export default function LandingPage(): ReactElement {
  if (isMobile) return <MobileView />;
  else return <DesktopView />;
}
