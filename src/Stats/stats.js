import React from 'react'
import { AppConst } from '../constants';
import InfoBox from './InfoBox/InfoBox';
import './Stats.css'

function Stats({ countryInfo }) {
    return (
        <div className="stats">
            <InfoBox title="Coronavirus Cases" caseType={AppConst.CASES} cases={countryInfo?.todayCases} total={countryInfo?.cases} />
            <InfoBox title="Recovered" caseType={AppConst.RECOVERED} cases={countryInfo?.todayRecovered} total={countryInfo?.recovered} />
            <InfoBox title="Deaths" caseType={AppConst.DEATHS} cases={countryInfo?.todayDeaths} total={countryInfo?.deaths} />
        </div>
    )
}

export default Stats