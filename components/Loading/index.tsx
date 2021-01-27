import {Backdrop} from '@material-ui/core';
import React, {ReactElement} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

interface Props {
  loading: boolean;
}

export default function Loading({loading}: Props): ReactElement {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <Loader type='ThreeDots' color='#8fba2a' height={80} width={80} />
    </Backdrop>
  );
}
