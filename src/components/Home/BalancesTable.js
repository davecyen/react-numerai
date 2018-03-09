import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import TimelineIcon from 'material-ui-icons/Timeline';

const styles = theme => ({
  table: {
    fontSize: 14,
  },
  bodyCell: {
    border: 0,
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
function createData(currency, amount) {
  id += 1;
  return { id, currency, amount};
}

const data = [
  createData('Numeraire', '0.00'),
  createData('USD', '$0.00'),
];

function BalancesTable(props) {
  const { classes } = props;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.row}>
          <TableCell className={classes.headerLeftCell + ' ' + classes.headerCell}>
            <TimelineIcon className={classes.headerIcon} />
            Balances
          </TableCell>
          <TableCell numeric className={classes.headerRightCell + ' ' + classes.headerCell}>
            1 NMR = $23.41
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(n => {
          return (
            <TableRow key={n.id} className={classes.row}>
              <TableCell className={classes.leftCell + ' ' + classes.bodyCell}>{n.currency}</TableCell>
              <TableCell numeric className={classes.rightCell + ' ' + classes.bodyCell}>{n.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

BalancesTable.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BalancesTable);
