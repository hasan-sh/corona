import React  from 'react';
import * as covid from 'novelcovid';
import MaterialTable from 'material-table';
import { getColumns, icons } from './constants';

export default function Countries(props) {
  return (
    <MaterialTable
      title="Cases throughout all Countries"
      columns={getColumns()}
      data={props.countries}
      icons={icons}
      options={{
        search: true,
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
        },
        pageSize: 20,
      }}
    />
  );
}
