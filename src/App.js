import React from 'react';
import { NovelCovid } from 'novelcovid';
import './App.css';

// Components
import Countries from './Countries';
import Map from './Map';
import AllCases from './General';

const covid = new NovelCovid()

function fetch_data(countries) {
  return countries ? covid.countries() : covid.all();
}

function App() {
  const [data, setData] = React.useState({});
  function load() {
    fetch_data()
      .then(all => setData(prevState => ({ ...prevState, all })))
      .catch(console.error);
    fetch_data(true)
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
