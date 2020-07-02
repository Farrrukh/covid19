import React from 'react'
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import cx from 'classnames';


const Cards=({ data: { confirmed, recovered, deaths, lastUpdate } })=>{
    if(!confirmed){
        return 'Loadin...'
    }
    return(
        <div className={styles.container}>
            <Grid  container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Infected</Typography>
                       <Typography variant="h5" >
                       <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                       </Typography>
                       <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Recoverd</Typography>
                        <Typography variant="h5" >
                       <CountUp start={0} end={ recovered.value } duration={2.75} separator="," />
                       </Typography>
                       <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of recoverd cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                       <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                       </Typography>
                       <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of death caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}
export default Cards;