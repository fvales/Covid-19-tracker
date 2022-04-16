import './App.css';
import { Card, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import Map from './Chart/Map'
import { AppConst } from './constants';
import Stats from './Stats/stats'
import Header from './Header';
import Table from './Table';
import { Utils } from './util';
import LineGraph from './Chart/LineGraph';

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(AppConst.WORLDWIDE);
  const [isCountriesLoading, setIsCountriesLoading] = useState(false)
  const [countryInfo, setCountryInfo] = useState('')
  const [countriesInfo, setCountriesInfo] = useState([])
  const [position, setPosition] = useState([20, 77])
  const [mapCountries, setMapCountries] = useState([])
  const [caseType, setCaseType] = useState(AppConst.CASES)

  const getCountries = async () => {
    setIsCountriesLoading(true)
    await fetch(process.env.REACT_APP_URL + AppConst.COUNTRIES)
      .then(response => response.json())
      .then(data => {
        const countries = data.map((countryData) => ({
          name: countryData.country,
          value: countryData.countryInfo.iso2
        }));
        setCountriesInfo(Utils.sortCountriesByCases(data))
        setCountries(countries)
        setMapCountries(data)
      }).finally(setIsCountriesLoading(false))
  }

  const getcountryInfo = async (countryCode) => {
    const endpoint = countryCode === AppConst.WORLDWIDE ? AppConst.ALL : AppConst.COUNTRIES + AppConst.ROOT_PATH + countryCode
    await fetch(process.env.REACT_APP_URL + endpoint)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
        countryCode !== AppConst.WORLDWIDE && setPosition([data?.countryInfo?.lat, data?.countryInfo?.long])
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
        <Stats countryInfo={countryInfo} setCaseType={(value) => setCaseType(value)} />

        {/* Map */}
        <Map position={position} countries={mapCountries} caseType={caseType} />
      </div>

      <div className='app__right'>
        <Card>
          <CardContent>
            <h2>Live Cases by Country</h2>
            <Table countries={countriesInfo} />
            <h2>Worldwide new {caseType}</h2>
            {/* Graph */}
            <LineGraph caseType={caseType} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
