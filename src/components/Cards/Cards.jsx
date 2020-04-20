import React from 'react'
import styles from './Cards.module.css'
import {Card,CardContent,Typography,Grid, StylesProvider} from '@material-ui/core'

const Cards = (props) => {
    console.log(props);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent >
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;