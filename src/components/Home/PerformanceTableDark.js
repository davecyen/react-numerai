import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import FileUpload from 'material-ui-icons/FileUpload';
import FileDownload from 'material-ui-icons/FileDownload';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#2b2b2b'
  },
  column: {
    color: '#777',
    textTransform: 'uppercase',
    fontSize: '.625rem'
  },
  metric: {
    fontSize:'.875rem',
    color: '#999'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 18
  },
});

function PerformanceTableDark(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="space-between" alignItems="center" spacing={24}>
        <Grid item xs="2" sm>
          <Hidden xsDown>
            <div className={classes.column}>My Rank</div>
          </Hidden>
          <Hidden smUp>
            <div className={classes.column}>Rank</div>
          </Hidden>
          <div className={classes.metric}>Unranked</div>
        </Grid>
        <Grid item xs="2" sm>
          <div className={classes.column}>Logloss</div>
          <div className={classes.metric}>N/A</div>
        </Grid>
        <Grid item xs="2" sm>
          <div className={classes.column}>Consistency</div>
          <div className={classes.metric}>N/A</div>
        </Grid>
        <Grid item xs="2" sm>
          <div className={classes.column}>Originality</div>
          <div className={classes.metric}>N/A</div>
        </Grid>
        <Grid item xs="2" sm>
          <div className={classes.column}>Concordance</div>
          <div className={classes.metric}>N/A</div>
        </Grid>
        <Hidden smDown>
          <Grid item align="right">
            <Button className={classes.secondaryButton} size="small">
              <FileDownload className={classes.leftIcon} />
              Download Dataset
            </Button>
          </Grid>
          <Grid item align="right">
            <Button className={classes.secondaryButton} size="small">
            <FileUpload className={classes.leftIcon} />
              Upload Predictions
            </Button>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

PerformanceTableDark.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PerformanceTableDark);
