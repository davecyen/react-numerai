import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    backgroundColor: '#1A1A1A',
    boxShadow: 'none',
    height: '100%',
  },
  table: {
    maxWidth: '100%',
  },
  headerRow: {
    height: '48',
    backgroundColor: '#1A1A1A'
  },
  cell: {
    border: 0,
    textTransform: 'uppercase',
    padding: '4px 20px',
    color: '#fff',
  },
  headerCell: {
    color: '#777',
  },
  nmrBlue: {
    color: '#01B8D4',
  }
});

let id = 0;
function createData(ai, logloss, careerUsd, consistency, originality, concordance, careerNmr) {
  id += 1;
  return { id, ai, logloss, careerUsd, consistency, originality, concordance, careerNmr};
}

const data = [
  createData('michaelscott', '0.491564', '4.00', '100%', '$0.00', '0.00'),
  createData('dwightschrute', '0.491564', '7.00', '100%', '$0.00', '0.00'),
  createData('Eclair', '0.491564', '3.50', '100%', '$0.00', '0.00'),
  createData('Cupcake', '0.491564', '4.00', '100%', '$0.00', '0.00'),
  createData('Gingerbread', '0.491564', '2.00', '100%', '$0.00', '0.00'),
  createData('michaelscott', '0.491564', '1.50', '100%', '$0.00', '0.00'),
  createData('dwightschrute', '0.491564', '0.20',  '100%','$0.00', '0.00'),
  createData('Eclair', '0.491564', '12.00', '100%', '$0.00', '0.00'),
  createData('Cupcake', '0.491564', '4.00', '100%', '$0.00', '0.00'),
  createData('Gingerbread', '0.491564', '4.00', '100%', '$0.00', '0.00'),
  createData('michaelscott', '0.491564',  '4.00','100%', '$0.00', '0.00'),
  createData('dwightschrute', '0.491564', '4.00', '100%', '$0.00','0.00'),
  createData('Eclair', '0.491564',  '4.00','100%','$0.00','0.00'),
  createData('Cupcake', '0.491564', '4.00', '100%', '$0.00', '0.00'),
  createData('Gingerbread', '0.491564', '4.00',  '100%', '$0.00', '0.00'),
];

function StakedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.headerRow}>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Rank</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} padding="dense">AI</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Logloss</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Staked</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Confidence</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">S/C</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense">Career NMR</TableCell>
            <TableCell className={classes.cell + ' ' + classes.headerCell} numeric padding="dense"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell className={classes.cell} padding="dense" numeric>{n.id}</TableCell>
                <TableCell className={classes.cell} padding="dense">{n.ai}</TableCell>
                <TableCell className={classes.cell} numeric padding="dense">{n.logloss}</TableCell>
                <TableCell className={classNames(classes.cell, classes.nmrBlue)} numeric padding="dense">{n.careerUsd}</TableCell>
                <TableCell className={classNames(classes.cell, classes.nmrBlue)} numeric padding="dense">{n.consistency}</TableCell>
                <TableCell className={classNames(classes.cell, classes.nmrBlue)} numeric padding="dense">{n.originality}</TableCell>
                <TableCell className={classNames(classes.cell, classes.nmrBlue)} numeric padding="dense">{n.concordance}</TableCell>
                <TableCell className={classNames(classes.cell, classes.nmrBlue)} numeric padding="dense">{n.careerNmr}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

StakedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StakedTable);
