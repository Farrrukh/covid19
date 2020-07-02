import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { fetchDailyData } from '../../api/index'

import {Line , Bar} from 'react-chartjs-2'

import styles from './Chart.module.css'


const Charts=({data: { confirmed, recovered, deaths }, country})=>{
    const [dailyData,setDailydata]=useState({});
    useEffect(()=>{
       const fetchApi= async()=>{
           const api= await fetchDailyData();
           setDailydata(api)

       }
       fetchApi()
    })
    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
    return(
        <div className={styles.container}>
      {   barChart }
    </div>
    )
}
export default Charts;