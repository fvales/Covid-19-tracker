import React from 'react'
import { FormControl, Select, MenuItem, Skeleton } from '@mui/material';

function Header({ isCountriesLoading, countries, onCountryChange, selectedCountry }) {
    return (
        <div className='app__header'>
            <h1>COVID 19 TRACKER</h1>
            {
                isCountriesLoading ? <Skeleton variant="rectangular" width={150} height={40} />
                    : <FormControl className='app__dropdown'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedCountry}
                            label="Age"
                            onChange={onCountryChange}
                        >
                            <MenuItem value={'worldwide'}>Worldwide</MenuItem>
                            {
                                countries?.map((country) => <MenuItem value={country?.value}>{country?.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
            }
        </div>
    )
}

export default Header