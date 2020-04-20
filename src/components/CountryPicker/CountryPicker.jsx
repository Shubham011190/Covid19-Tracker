import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../API'

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect default='' onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>      {/*Blueprint of how options are to be */}
                {fetchedCountries.map((country,i) =>
                    <option value={country} key={i}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;