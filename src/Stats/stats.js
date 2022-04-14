import React from 'react'
import InfoBox from './InfoBox/InfoBox';
import './Stats.css'

function Stats({ countryInfo }) {
    return (
        <div className="stats">
            <InfoBox title="Coronavirus Cases" cases={countryInfo?.todayCases} total={countryInfo?.cases} />
            <InfoBox title="Recovered" cases={countryInfo?.todayRecovered} total={countryInfo?.recovered} />
            <InfoBox title="Deaths" cases={countryInfo?.todayDeaths} total={countryInfo?.deaths} />
        </div>
    )
}

export default Stats