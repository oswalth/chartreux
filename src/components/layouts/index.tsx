import {
  AppBar, Box, Drawer, Grid, SxProps, Theme, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Sider } from './Sider';
import { logoImage } from '../../assets';
import { theme } from '../../theme';
import { Loader } from '../common/Loader';

const drawerWidth = 250;
export const headerHeight = 60;
export const paddingSize = 40;

const styles: Record<string, SxProps<Theme>> = {
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0px -1px 0px ${theme.palette.secondary.main}`,
    color: theme.palette.text.primary,
    height: headerHeight,
    '& > div': {
      paddingLeft: `${paddingSize}px`,
      height: headerHeight,
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    borderRadius: 0,
    width: drawerWidth,
    border: 'none',
    boxShadow: `inset -1px 0px 0px ${theme.palette.secondary.main}`,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    height: headerHeight,
    paddingLeft: `${paddingSize}px`,
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.light,
    minHeight: '100vh',
  },
  backIcon: {
    marginTop: 1,
    color: theme.palette.primary.main,
  },
};

interface LayoutProps {
  children: JSX.Element
  redirectLink?: string
  header: string
  loading?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children, redirectLink, header, loading,
}) => {
  const Header = (
    <Typography variant="h2" noWrap>
      {header}
    </Typography>
  );

  return (
    <Box sx={styles.root}>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          {redirectLink ? (
            <Link
              style={{ display: 'flex', alignItems: 'inherit' }}
              to={redirectLink}
            >
              {Header}
            </Link>
          ) : (
            Header
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={styles.drawer}
        variant="permanent"
        PaperProps={{ sx: styles.drawerPaper }}
        anchor="left"
      >
        <Grid container alignContent="center" sx={styles.toolbar}>
          <img height={30} src={logoImage} alt="upriseLogo" />
        </Grid>

        <Sider />
      </Drawer>
      <main
        style={
          {
            paddingBottom: `${theme.spacing(0)}`,
          } as React.CSSProperties
        }
      >
        <Box sx={styles.toolbar} />

        {loading ? (
          <Loader />
        ) : (
          <>
            {children}
          </>
        )}
      </main>
    </Box>
  );
};

export default Layout;
