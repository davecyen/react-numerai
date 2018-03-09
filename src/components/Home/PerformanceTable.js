import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20
  },
  column: {
    textAlign: 'left',
    color: '#777',
    textTransform: 'uppercase',
    fontSize: 10
  },
  metric: {
    fontSize: 14,
    color: '#090909'
  },
  secondaryButton: {
    backgroundColor: '#fff',
    color: '#030303'
  },
});

function PerformanceTable(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="space-between" alignItems="center" spacing={24}>
        <Grid item xs="6" sm>
          <div className={classes.column}>My Current Rank</div>
          <div className={classes.metric}>Unranked</div>
        </Grid>
        <Grid item xs="6" sm>
          <div className={classes.column}>Logloss</div>
          <div className={classes.metric}>N/A</div>
        </Grid>
        <Grid item xs="4" sm>
          <div className={classes.column}>Consistency</div>
          <div className={classes.metric}>N/A</div>
        </Grid>
        <Grid item xs="4" sm>
          <div className={classes.column}>Originality</div>
          <div className={classes.metric}>N/A</div>
        </Grid>
        <Grid item xs="4" sm>
          <div className={classes.column}>Concordance</div>
          <div className={classes.metric}>N/A</div>
        </Grid>
        <Hidden smDown>
          <Grid item align="right">
            <Button className={classes.secondaryButton} size="small">Download Dataset</Button>
          </Grid>
          <Grid item align="right">
            <Button className={classes.secondaryButton} size="small">Upload Predictions</Button>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

PerformanceTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PerformanceTable);
