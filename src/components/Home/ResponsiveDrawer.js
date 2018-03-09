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
import MenuIcon from 'material-ui-icons/Menu';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';

import BalancesTable from './BalancesTable';
import LevelTable from './LevelTable';
import PerformanceTable from './PerformanceTable';
import LeaderboardTable from './LeaderboardTable';
import StakedTable from './StakedTable';

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
    backgroundColor: '#090909',
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  logo: {
    height: 45,
  },
  username: {
    textTransform: 'uppercase',
    fontSize: 18,
    marginTop: 10,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  submenu: {
    marginTop: 20,
    paddingBottom: 30
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    border: 0,
    boxShadow: '2px 0 8px 0 rgba(0,0,0,0.5)',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'theme.palette.background.default',
    padding: theme.spacing.unit * 3,
    marginTop: 123,
    height: 'calc(100vh - 123px)',
    overflowY: 'scroll',
    color: '#555',
    padding: 0
  },
  nmrGreen: {
    color: '#00DB77',
  },
  nmrBlue: {
    color: '#01B8D4',
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

function TabContainer({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    tabValue: 0,
  };

  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  handleTabChangeIndex = index => {
    this.setState({ value: index });
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div className={classes.drawer}>
        <Toolbar>
          <NavLink to={routes.HOME}>
            <img src={require('../../public/images/numerai-black.png')} alt="Numerai" className={classes.logo} />
          </NavLink>
        </Toolbar>
        <Button className={classes.username} as={NavLink} to={routes.PROFILE} color="secondary" size="large">
          {username}
        </Button>
        <BalancesTable />
        <LevelTable />
        <List className={classes.submenu} component="nav">
          {data.map(n => {
            return (
              <ListItem key={n.id} button dense>
                <ListItemText style={{paddingLeft: 0}} inset primary={n.link} />
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
            <Grid container justify="center" alignItems="center" spacing={24}>
              <Hidden smDown>
                <Grid item sm={4}>
                  <Button as={NavLink} to={routes.TOURNAMENTS} color="secondary">
                    Past Tournaments
                  </Button>
                </Grid>
              </Hidden>
              <Grid item sm={4}>
                <Typography variant="title" align="center">
                  Tournament 97
                </Typography>
                <Typography className={classes.nmrGreen} variant="subheading" align="center">
                  $6,000 USD + 2,000 NMR
                </Typography>
              </Grid>
              <Hidden smDown>
                <Grid align="right" item sm={4}>
                  <Button className={classes.nmrBlue} as={NavLink} to={routes.TOURNAMENTS} color="secondary">
                    Stake Numeraire
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
          <Tabs
            value={this.state.tabValue}
            onChange={this.handleTabChange}
            centered
            fullWidth
          >
            <Tab label="All Submissions" />
            ><Tab label="Staked Submissions" />
          </Tabs>
        </AppBar>
        <Hidden mdUp >
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
              docked: classes.drawerPaper,
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
              docked: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <PerformanceTable />
          {this.state.tabValue === 0 &&
            <LeaderboardTable />
          }
          {this.state.tabValue === 1 &&
            <StakedTable />
          }
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
