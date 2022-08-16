import React, {useEffect} from 'react';
import DataGrid from '../../components/common/DataGrid';
import DataGridPagination from '../../components/common/DataGridPagination';
import SearchBar from '../../components/common/SearchBar';
import Layout from '../../components/layouts';
import { clients as clientsData } from '../../data';
import {ClientType} from '../../types/clients';
import {ColumnType} from '../../types/dataGrid';

const columns: ColumnType[] = [
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
];

const clientsLookups = [
  {
    value: 'firstName',
    label: 'First Name',
  },
  {
    value: 'lastName',
    label: 'Last Name',
  },
  {
    value: 'email',
    label: 'Email',
  },
]

const defaultRowsPerPage = 5;

const Home: React.FC = () => {
  // const toggleSort = (event) => {
  //   const column = event.target.value;
  //
  //   if (sort === column) {
  //     if (sortDir === 'asc') {
  //       setSortDir('desc')
  //     } else {
  //       setSort(null);
  //       setSortDir('asc')
  //     }
  //   } else {
  //     setSort(column);
  //   }
  // }
  const [clients, setClients] = React.useState<ClientType[]>([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const [selectedLookup, setSelectedLookup] = React.useState(clientsLookups[0].value);
  const [searchValue, setSearchValue] = React.useState('');

  useEffect(() => {
    console.log('loading first')
    loadData();
  }, [])

  const search = (searchValue: string, lookupField: string) => {
    setClients(clientsData.filter(client => String(client[lookupField as keyof ClientType]).startsWith(searchValue)))
  }

  const loadData = (offset = 0, limit = defaultRowsPerPage) => {
    const newClients = clientsData.slice(offset, offset + limit);
    console.log(newClients);
    setClients(newClients);
  }

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
    loadData(newPage * rowsPerPage, rowsPerPage)
  };

  const handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    loadData(0, newRowsPerPage);
  };

  const handleLookupChange = (lookup: string) => {
    setSelectedLookup(lookup);
    search(searchValue, lookup)
  }

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value)
    search(value, selectedLookup)
  }

  return (
    <Layout header="Index">
      <>
        <SearchBar
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
          lookups={clientsLookups}
          selectedLookup={selectedLookup}
          handleLookupChange={handleLookupChange}
        />
        <DataGrid
          columns={columns}
          data={clients}
        />
        <DataGridPagination
          totalCount={clientsData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </>
    </Layout>
  );
};

export default Home;
