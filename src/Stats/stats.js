import React from 'react'
import { AppConst } from '../constants';
import InfoBox from './InfoBox/InfoBox';
import './Stats.css'

function Stats(props) {
    return (
        <div className="stats">
            <InfoBox setCaseType={props.setCaseType} title="Coronavirus Cases" caseType={AppConst.CASES} cases={props.countryInfo?.todayCases} total={props.countryInfo?.cases} />
            <InfoBox setCaseType={props.setCaseType} title="Recovered" caseType={AppConst.RECOVERED} cases={props.countryInfo?.todayRecovered} total={props.countryInfo?.recovered} />
            <InfoBox setCaseType={props.setCaseType} title="Deaths" caseType={AppConst.DEATHS} cases={props.countryInfo?.todayDeaths} total={props.countryInfo?.deaths} />
        </div>
    )
}

export default Stats