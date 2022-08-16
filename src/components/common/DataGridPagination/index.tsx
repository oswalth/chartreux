import {Paper, TablePagination} from '@mui/material';
import React from 'react';

interface DataGridPaginationProps {
  totalCount: number
  page: number
  rowsPerPage: number
  handleChangePage: (newPage: number) => void
  handleChangeRowsPerPage: (newRowsPerPage: number) => void
}

const DataGridPagination = ({totalCount, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage}: DataGridPaginationProps) => {
  const onPageChange = (event: unknown, newPage: number) => {
    handleChangePage(newPage)
  }

  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeRowsPerPage(+event.target.value);
  }

  return (
    <Paper
      sx={
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '8vh',
        width: '50%',
        float: 'right',
      }
    }>
      <TablePagination
        showFirstButton
        showLastButton
        rowsPerPageOptions={[5, 7, 10]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  )
}

export default DataGridPagination;
