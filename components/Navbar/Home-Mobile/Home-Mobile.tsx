import React, {ReactElement, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Home-Mobile.module.css';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {
  AppBar,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  QuestionAnswerOutlined,
  FitnessCenter,
  Loyalty,
  AccessibilityNew,
  ExitToAppOutlined,
  Star,
} from '@material-ui/icons';
import {useRouter} from 'next/router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'rgb(143, 186, 42)',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Navbar(): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawer}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}>
            <Menu />
          </IconButton>
          <div className={styles.image}>
            <Image
              src='/logo.png'
              alt='logo'
              layout='fixed'
              width={151.06}
              height={20}
              onClick={() => router.push('/')}
            />
          </div>
          <ExitToAppOutlined
            style={{color: 'rgb(143, 186, 42)', marginTop: 2}}
            onClick={() => router.push('/login')}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() =>
              window.open(
                  `https://api.whatsapp.com/send?phone=6281317762785&text=Halo,%20customer%20service%20megafit.`,
              )
            }>
            <ListItemIcon>
              <QuestionAnswerOutlined />
            </ListItemIcon>
            <ListItemText primary={'Konsultasi Dulu'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Loyalty />
            </ListItemIcon>
            <ListItemText primary={'Free Trial'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccessibilityNew />
            </ListItemIcon>
            <ListItemText primary={'1 Day Pass'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Star />
            </ListItemIcon>
            <ListItemText primary={'Private Gym'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FitnessCenter />
            </ListItemIcon>
            <ListItemText primary={'Bergabung'} />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
