import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import StarIcon from 'material-ui-icons/Star';

const styles = theme => ({
  table: {
    fontSize: 14,
    marginTop: 30,
    marginBottom: 30,
  },
  bodyCell: {
    border: 0,
    color: '#999',
  },
  row: {
    height: 36,
  },
  headerCell: {
    verticalAlign: 'bottom',
    border: 0,
    paddingBottom: 10,
    fontWeight: 400,
  },
  headerLeftCell: {
    fontSize: 16,
    paddingRight: 10,
  },
  headerRightCell: {
    paddingLeft: 0,
  },
  headerIcon: {
    fontSize: 18,
    paddingRight: 24,
    paddingBottom: 2,
    verticalAlign: 'bottom',
  },
  leftCell: {
    paddingLeft: 66,
  },
  rightCell: {
    paddingRight: 30,
    paddingLeft: 0,
  }
});

let id = 0;
function createData(step) {
  id += 1;
  return { id, step};
}

const data = [
  createData('Verify your account via SMS'),
  createData('Enable 2FA'),
  createData('Download 1st dataset'),
  createData('Upload 1st predictions'),
  createData('Stake NMR in a tournament'),
];

function LevelTable(props) {
  const { classes } = props;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.row}>
          <TableCell className={classes.headerLeftCell + ' ' + classes.headerCell}>
            <StarIcon className={classes.headerIcon} />
            Level
          </TableCell>
          <TableCell numeric className={classes.headerRightCell + ' ' + classes.headerCell}>
            Novice
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(n => {
          return (
            <TableRow key={n.id} className={classes.row}>
              <TableCell colspan="2" className={classes.leftCell + ' ' + classes.bodyCell}>{n.step}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

LevelTable.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LevelTable);
