import React from 'react'
import useStyles from './home-style'
import Button from '@mui/material/Button'
import { Grid, Typography, Container, Card, CardMedia } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import { grey, amber, orange } from '@mui/material/colors'


const Home = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.background}>
                <Container maxWidth='lg' className={classes.content_wrap}>
                    <Grid container justify='center' direction='column' className={classes.column_guide}>
                        <Grid item align='center' className={classes.heading}>
                            <Typography variant='h3' color='whitesmoke' sx={{ fontWeight: 'bold' }}>Unveil the Hidden Story of Every Vehicle</Typography>
                        </Grid>
                        <Grid item className={classes.buttonBar} align='center'>
                            <PaidRoundedIcon sx={{ color: grey[700], fontSize: 80 }} />
                            <BuildIcon sx={{ color: amber[500], fontSize: 70 }} />
                            <TransferWithinAStationIcon sx={{ color: orange[400], fontSize: 70 }} />
                        </Grid>
                        <Grid item align='center' className={classes.button}>
                            <Button variant='contained' color='secondary' href='/Register'>Begin</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.solidBackground}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item align='left' xs={5} className={classes.text}>
                            <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold' }}>Blockchain Powered</Typography>
                        </Grid>
                        <Grid item align='right' xs={7} className={classes.text}>
                            <Typography variant='h5' color='primary'>Our advanced technology and blockchain-powered platform ensures the accuracy and integrity of the information that we deliver</Typography>
                        </Grid>
                        <Grid item align='left' xs={12} className={classes.text}>
                            <Typography variant='h5' color='primary'>From accident reports to maintenance records, ownership history to mileage verification, we leave no stone unturned in revealing the complete vehicle story</Typography>
                        </Grid>
                        <Grid item align='left' xs={5} className={classes.text}>
                            <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold' }}>Transparency</Typography>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item align='left' xs={6} className={classes.text}>
                                <Typography variant='h5' color='primary'>We understand the importance of transparency and trust when it comes to making informed decisions about your vehicle</Typography>
                            </Grid>
                            <Grid item align='right' xs={6}>
                                <Card>
                                    <CardMedia component='img' height='auto' image='/images/dealerImage.png' />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Home