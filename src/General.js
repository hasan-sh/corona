import React from 'react'
import MaterialTable from 'material-table';
import { getColumns, icons } from './constants';


export default function AllCases(props) {
  return (
    <MaterialTable
      title="Cases overall"
      columns={getColumns(true)}
      data={[props.all]}
      icons={icons}
      options={{
        search: false,
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
        },
        pageSize: 1,
        paging: false,
      }}
    />
  );
};