import React, {ReactElement} from 'react';
import dynamic from 'next/dynamic';
import Loading from '../components/Loading';

const View = dynamic(import('../layout/login'), {
  loading: () => <Loading loading />,
});

export default function LoginPage(): ReactElement {
  return <View />;
}
