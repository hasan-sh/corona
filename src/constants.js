import React, { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export const icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export function getColumns(all) {
  let columns = [
    {
      title: 'Country',
      field: 'country',
      render: rowData => (
        <div>
          <span>{rowData.tableData.id + 1} - </span>
          <span>{rowData.country}</span>
        </div>
      ),
    },
    {
      title: 'Cases',
      field: 'cases',
      type: 'numeric',
      defaultSort: 'desc',
      render: rowData => <strong>{rowData.cases.toLocaleString()}</strong>,
    },
    {
      title: 'Cases Today',
      field: 'todayCases',
      render: rowData => <span>+{rowData.todayCases.toLocaleString()}</span>,
    },
    { title: 'Deaths', field: 'deaths', type: 'numeric' },
    { title: 'Deaths Today', field: 'todayDeaths', type: 'numeric' },
    { title: 'Recovered', field: 'recovered', type: 'numeric' },
    { title: 'Active', field: 'active', type: 'numeric' },
    {
      title: 'Flag',
      field: 'countryInfo.flag',
      type: 'string',
      sorting: false,
      render: rowData => (
        <img
          width="35"
          style={{
            verticalAlign: 'middle',
          }}
          src={rowData.countryInfo.flag}
          alt={`Country ${rowData.country}`}
        />
      ),
    },
  ];
  if (all) {
    columns = [
      { title: 'Cases', field: 'cases', type: 'numeric' },
      { title: 'Deaths', field: 'deaths', type: 'numeric' },
      { title: 'Recovered', field: 'recovered', type: 'numeric' },
      {
        title: 'Updated',
        field: 'updated',
        render: data => (
          <span>
            {data.updated ? new Date(data.updated).toLocaleTimeString() : ''}
          </span>
        ),
      },
    ];
  }

  return columns;
}
