import React, {ReactElement} from 'react';
import dynamic from 'next/dynamic';
import Loading from '../components/Loading';

const View = dynamic(import('../layout/forget-password'), {
  loading: () => <Loading loading />,
});

export default function forgetPasswordPage(): ReactElement {
  return <View />;
}
