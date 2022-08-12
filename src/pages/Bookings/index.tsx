import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React from 'react';
import Layout from '../../components/layouts';
import { clients } from '../../data';

interface Column {
  id: 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'employer' | 'accessCode' | 'isActive';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: any) => string;
}

const columns: readonly Column[] = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'phoneNumber',
    label: 'Phone',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'employer',
    label: 'Employer',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'accessCode',
    label: 'Access Code',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'isActive',
    label: 'Status',
    minWidth: 30,
    format: (value) => (value ? '✅' : '❌'),
  },
  {
    id: 'accessCode',
    label: 'Access Code',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'accessCode',
    label: 'Access Code',
    minWidth: 170,
    align: 'right',
  },
];

const Home: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Layout header="Index">
      <>
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: '600px', overflowX: 'auto' }}>
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
                {clients
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => console.log(row.id)}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
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
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={clients.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Paper>
      </>
    </Layout>
  );
};

export default Home;
