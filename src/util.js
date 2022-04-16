import { Circle, Popup } from "react-leaflet"
import { AppConst } from "./constants"

export const Utils = {
    sortCountriesByCases: (countriesInfo) => {
        return countriesInfo?.sort((a, b) => a.cases > b.cases ? -1 : 1)
    },

    showDataOnMap: (data, caseType) => {
        return data.map((country, index) => {
            return <Circle
                key={'map_' + index}
                center={[country?.countryInfo?.lat, country?.countryInfo?.long]}
                fillOpacity={0.4}
                fillColor={AppConst.getConfByCaseType[caseType].hex}
                color={AppConst.getConfByCaseType[caseType].hex}
                radius={Math.sqrt(country[caseType] * AppConst.getConfByCaseType[caseType].multiplier)}
            >
                <Popup>
                    <div>
                        <div>
                            <img className="map__flag" alt={country.country} src={country.countryInfo.flag} />
                        </div>
                        <div>{country.country}</div>
                        <div>Cases: <span style={{ color: AppConst.getConfByCaseType[AppConst.CASES].hex }}>{country?.cases?.toLocaleString()}</span></div>
                        <div>Death: <span style={{ color: AppConst.getConfByCaseType[AppConst.DEATHS].hex }}>{country?.deaths?.toLocaleString()}</span></div>
                        <div>Recovered: <span style={{ color: AppConst.getConfByCaseType[AppConst.RECOVERED].hex }}>{country?.recovered?.toLocaleString()}</span></div>
                    </div>
                </Popup>
            </Circle>

        })
    }
}