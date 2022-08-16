import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import React from 'react';
import {ClientType} from '../../../types/clients';
import {ColumnType} from '../../../types/dataGrid';

interface DataGridProps {
  columns: ColumnType[]
  data: ClientType[]
}

const DataGrid = ({columns, data}: DataGridProps) => (
    <Paper sx={{ width: '100%', margin: '10px' }}>
      <TableContainer sx={{ maxHeight: '65vh', overflowX: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => console.log(row.id)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={`${column.id}-${row.id}`} align={column.align}>
                        {column.format
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )

export default DataGrid;
