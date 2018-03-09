import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import BalancesTable from './BalancesTable';
import LevelTable from './LevelTable';

import * as routes from '../../constants/routes';

const drawerWidth = 300;
const username = 'Yenmatic';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: 100,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  username: {
    textTransform: 'uppercase',
    fontSize: 20,
    marginTop: 20,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  submenu: {
    marginTop: 20,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    boxShadow: '2px 0 8px 0 rgba(0,0,0,0.5)',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
});

let id = 0;
function createData(link) {
  id += 1;
  return { id, link};
}

const data = [
  createData('Account'),
  createData('API'),
  createData('Chat'),
  createData('Reddit'),
  createData('Blog'),
  createData('Help'),
];

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div className={classes.drawer}>
        <Toolbar>
          Numerai
        </Toolbar>
        <Divider />

        <Button className={classes.username} as={NavLink} to={routes.PROFILE} color="secondary" size="large">
          {username}
        </Button>
        <BalancesTable />
        <LevelTable />
        <List className={classes.submenu} component="nav">
          {data.map(n => {
            return (
              <ListItem key={n.id} button dense>
                <ListItemText style={{paddingLeft: 40}} inset primary={n.link} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Button as={NavLink} to={routes.TOURNAMENTS} color="secondary">
              Past Tournaments
            </Button>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          <Button variant="raised" color="primary">
            Hello World
          </Button>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
