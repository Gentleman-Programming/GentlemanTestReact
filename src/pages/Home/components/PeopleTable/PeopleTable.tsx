import {Person} from '@/models';
import {addFavorite, removeFavorite} from '@/redux/states';
import {AppStore} from '@/redux/store';
import {Checkbox} from '@mui/material';
import {DataGrid, GridRenderCellParams} from '@mui/x-data-grid';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const PeopleTable: React.FC = () => {
  const dispatch = useDispatch();
  const statePeople = useSelector((store: AppStore) => store.people);
  const favoritePeople = useSelector((store: AppStore) => store.favorites);
  const pageSize = 5;

  const findPerson = (person: Person) => !!favoritePeople.find(p => p.id === person.id);

  const handleChange = (person: Person) => {
    if (findPerson(person)) {
      dispatch(removeFavorite(person))
      return;
    }
    dispatch(addFavorite(person));
  };

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)}/>}</>
      )
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of happiness',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ];

  return (
    <DataGrid
      rows={statePeople}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: Person) => row.id}
    />
  );
};

export default PeopleTable;
