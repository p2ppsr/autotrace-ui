import React from 'react'
import useStyles from './trace-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container} from '@mui/material'

const Trace = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.background}>
                <Container maxWidth='lg'>
                    <Grid container justify='center' direction='column'>
                        <Grid item align='center' className={classes.heading}>
                            <Typography variant='h3' sx={{fontWeight: 'bold'}}>Trace</Typography>
                        </Grid>
                        <Grid item align='center' className={classes.text}>
                            <Typography variant='h6'>We leave no stone unturned in revealing the complete vehicle story</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' direction='column'>
                        <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
                            <Grid item>
                                <TextField id='traceVinNumber' label='VIN Number' variant='filled' color='primary'/>
                            </Grid>
                        </Grid>
                        <Grid item align='center' className={classes.button}>
                            <Button variant='contained' color='secondary' id='search'>Search</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Trace