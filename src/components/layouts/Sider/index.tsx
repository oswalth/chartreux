import {Box, List, ListItem, ListItemIcon, ListItemText, SxProps, Theme} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, {useMemo} from 'react';
import {NavLink} from 'react-router-dom';
import {ClientsIcon, CoachingIcon} from '../../../assets';
import {HomeIcon} from '../../../assets/icons/HomeIcon';
import {theme} from '../../../theme';
import {Color} from '../../../theme/variables';
import {paddingSize} from '../index';


const useStyles = makeStyles(() => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
    '& > div:hover': {
      background: Color.SecondaryLight,
      '& div': {
        color: theme.palette.primary.main,
      },
    },
  },
  activeLink: {
    color: theme.palette.primary.main,
    '& div': {
      color: `${theme.palette.primary.main} !important`,
    },
    '& > div': {
      background: Color.SecondaryLight,
      '&::after': {
        content: "''",
        height: 21,
        width: 4,
        borderRadius: '2px 0px 0px 2px',
        position: 'absolute',
        background: theme.palette.primary.main,
        right: '0',
      },
    },
  },
}))

const styles: Record<string, SxProps<Theme>> = {
  wrapper: {
    height: `calc(100% - 99px)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '20px',
  },
  list: {
    paddingRight: '1px',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    paddingTop: 1,
    paddingBottom: 1,
    color: theme.palette.text.secondary,
    '& div.MuiListItemIcon-root': {
      color: '#EAEAEC',
      minWidth: 3,
      marginRight: 2,
    },
  },
}

export const Sider: React.FC = () => {
  const classes = useStyles();
  const navItems = useMemo(
    () => [
      {
        name: 'Home',
        icon: <HomeIcon />,
        path: '/',
        enabled: true,
      },
      {
        name: 'Bookings',
        icon: <CoachingIcon />,
        path: '/bookings',
        enabled: true,
      },
      {
        name: 'Clients',
        icon: <ClientsIcon />,
        path: '/clients',
        enabled: true,
      },
    ],
    [],
  )

  return (
    <Box sx={styles.wrapper}>
      <List sx={styles.list}>
        {navItems.map(
          ({ name, icon, path, enabled }) =>
            enabled && (
              <NavLink
                key={path}
                to={path}
                className={isActive => isActive ? classes.activeLink : classes.link}
              >
                <ListItem sx={{ ...styles.listItem, paddingLeft: `${paddingSize}px` }}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </NavLink>
            ),
        )}
      </List>
    </Box>
  )
}