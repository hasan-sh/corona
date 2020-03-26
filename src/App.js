import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as covid from 'novelcovid';
import Countries from './Countries';
import MaterialTable from 'material-table';
import { getColumns, icons } from './constants';
import Map from './Map';

function fetch_data(countries) {
  return countries ? covid.getCountry() : covid.getAll();
}

function AllCases(props) {
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
}

function App() {
  const [data, setData] = React.useState({});
  function load() {
    fetch_data()
      .then(all => setData(prevState => ({ ...prevState, all })))
      .catch(console.error);
    fetch_data(true)
      .then(countries => setData(prevState => ({ ...prevState, countries })))
      .catch(console.error);
  }
  React.useEffect(() => {
    setInterval(load, 1000 * 10 * 60);
    load();
    return () => load;
  }, []);

  return (
    <div className="App">
      <div className="item">
        <Map />
      </div>
      <div className="item">
        <AllCases all={data.all || {}} />
      </div>
      <Countries countries={data.countries} />
      <button onClick={load}>Reload</button>
    </div>
  );
}

export default App;
