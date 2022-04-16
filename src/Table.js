import React from 'react'

function Table({ countries }) {
    return (
        <div className='table'>
            {
                countries?.map(({ country, cases, countryInfo }) => {
                    return <div key={country + '_' + countryInfo.iso2}>
                        <span>{country}</span>
                        <span>{cases}</span>
                    </div>
                })
            }
        </div>
    )
}

export default Table