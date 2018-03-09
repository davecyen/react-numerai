import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    backgroundColor: '#eee',
    boxShadow: 'none',
  },
  table: {
    maxWidth: '100%',
  },
  headerRow: {
    height: '48',
    backgroundColor: '#E6E6E6'
  },
  cell: {
    border: 0,
    textTransform: 'uppercase',
    padding: '4px 20px',
    color: '#ccc',
  },
  headerCell: {
    color: '#777',
  },
  nmrGreen: {
    color: '#00DB77',
  },
  nmrBlue: {
    color: '#01B8D4',
  },
});

let id = 0;
function createData(ai, logloss, careerUsd, consistency, originality, concordance, careerNmr) {
  id += 1;
  return { id, ai, logloss, careerUsd, consistency, originality, concordance, careerNmr};
}

const data = [
  createData('michaelscott', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('dwightschrute', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Eclair', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Cupcake', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Gingerbread', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('michaelscott', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('dwightschrute', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Eclair', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Cupcake', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Gingerbread', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('michaelscott', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('dwightschrute', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Eclair', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Cupcake', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
  createData('Gingerbread', '0.491564', '$0.00', '100%', 1, 1, '0.00'),
];

function LeaderboardTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.headerRow}>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Rank</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} padding="dense">AI</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Logloss</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Career USD</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Consistency</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Originality</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Concordance</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Career NMR</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell className={classes.cell} padding="dense" numeric>{n.id}</TableCell>
                <TableCell className={classes.cell} padding="dense">{n.ai}</TableCell>
                <TableCell className={classes.cell} numeric padding="dense">{n.logloss}</TableCell>
                <TableCell className={classes.cell} numeric padding="dense">{n.careerUsd}</TableCell>
                <TableCell className={classes.cell + ' ' + classes.nmrGreen} numeric padding="dense">{n.consistency}</TableCell>
                <TableCell className={classes.cell + ' ' + classes.nmrGreen} numeric padding="dense">{n.originality}</TableCell>
                <TableCell className={classes.cell + ' ' + classes.nmrGreen} numeric padding="dense">{n.concordance}</TableCell>
                <TableCell className={classes.cell} numeric padding="dense">{n.careerNmr}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

LeaderboardTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeaderboardTable);
