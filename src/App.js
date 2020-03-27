import React from 'react';
import * as covid from 'novelcovid';
import './App.css';

// Components
import Countries from './Countries';
import Map from './Map';
import AllCases from './General';

function fetch_data(countries) {
  console.log(covid);
  return countries ? covid.getCountry() : covid.getAll();
}

function normalize(data) {
  if (Array.isArray(data)) {
    data.sort((a, b) => (a.cases > b.cases ? -1 : 1));
    return data.map(entry => {
      const keys = Object.keys(entry);
      keys.forEach(key =>
        Number(entry[key])
          ? (entry[key] = entry[key].toLocaleString())
          : entry[key]
      );
      return entry;
    });
  }
  const keys = Object.keys(data);
  keys.forEach(key =>
    key !== 'updated' && Number(data[key])
      ? (data[key] = data[key].toLocaleString())
      : data[key]
  );
  console.log(data);
  return data;
}

function App() {
  const [data, setData] = React.useState({});
  function load() {
    fetch_data()
      // .then(normalize)
      .then(all => setData(prevState => ({ ...prevState, all })))
      .catch(console.error);
    fetch_data(true)
      // .then(normalize)
      .then(data => data.sort((a, b) => (a.cases > b.cases ? -1 : 1)))
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
