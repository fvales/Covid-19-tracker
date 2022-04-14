import './App.css';
import { Card, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import Map from './Chart/Map'
import { ApiConst } from './constants';
import Stats from './Stats/stats'
import Header from './Header';
import Table from './Table';
import { Utils } from './util';
import LineGraph from './Chart/LineGraph';

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(ApiConst.WORLDWIDE);
  const [isCountriesLoading, setIsCountriesLoading] = useState(false)
  const [countryInfo, setCountryInfo] = useState('')
  const [countriesInfo, setCountriesInfo] = useState([])

  const getCountries = async () => {
    setIsCountriesLoading(true)
    await fetch(process.env.REACT_APP_URL + ApiConst.COUNTRIES)
      .then(response => response.json())
      .then(data => {
        const countries = data.map((countryData) => ({
          name: countryData.country,
          value: countryData.countryInfo.iso2
        }));
        setCountriesInfo(Utils.sortCountriesByCases(data))
        setCountries(countries)
      }).finally(setIsCountriesLoading(false))
  }

  const getcountryInfo = async (countryCode) => {
    const endpoint = countryCode === ApiConst.WORLDWIDE ? ApiConst.ALL : ApiConst.COUNTRIES + ApiConst.ROOT_PATH + countryCode
    await fetch(process.env.REACT_APP_URL + endpoint)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
      })
  }

  useEffect(() => {
    getCountries();
  }, [])

  useEffect(() => {
    getcountryInfo(selectedCountry)
  }, [selectedCountry])

  const onCountryChange = async (event) => {
    const countryCode = event.target?.value;
    setSelectedCountry(countryCode)
  }

  return (
    <div className="app">
      <div className='app__left'>
        {/* Header */}
        <Header isCountriesLoading={isCountriesLoading} onCountryChange={onCountryChange} countries={countries} selectedCountry={selectedCountry} />

        {/* Stats */}
        <Stats countryInfo={countryInfo} />

        {/* Map */}
        <Map />
      </div>

      <div className='app__right'>
        <Card>
          <CardContent>
            <h2>Live Cases by Country</h2>
            <Table countries={countriesInfo} />
            <h2>Worldwide new cases</h2>
            {/* Graph */}
            <LineGraph />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
