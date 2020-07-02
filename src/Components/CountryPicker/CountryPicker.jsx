import React ,{useState , useEffect } from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css'
import {fetchCountryPicker} from '../../api/index'


const CountryPicker=({handleCountryChange})=>{
    const [fetchCountries,setFetchCountries]=useState([])
    useEffect(()=>{
        const fetchCount= async()=>{
            setFetchCountries(await fetchCountryPicker())
        }
        fetchCount()
    },[setFetchCountries])
    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
    {fetchCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;