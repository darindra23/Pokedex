import React, {ReactElement} from 'react';
import dynamic from 'next/dynamic';

const DesktopView = dynamic(import('../layout/home/desktop'));

export default function homePage(): ReactElement {
  return <DesktopView />;
}
