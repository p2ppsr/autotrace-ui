import React, { useState } from 'react'
import useStyles from './request-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container, Alert, AlertTitle, Collapse } from '@mui/material'
import { AutoTrace, ATEvent } from 'babbage-autotrace'


const RepairRequest = () => {
    const classes = useStyles()
    const [VIN, setVIN] = useState('')
    const [shop, setShop] = useState('')
    const [description, setDescription] = useState('')
    const [alertSeverity, setAlertSeverity] = useState('info')
    const [message, setMessage] = useState('')
    const [collapsed, setCollapsed] = useState(false)

    const autoTrace = new AutoTrace()

    const requestRepair = async () => {
        const repairRequestDoc = {
            VIN,
            shop,
            description
        }

        const event = new ATEvent(
            crypto.randomUUID(),
            'RepairRequest',
            'Request that a vehicle be repaired',
            Date.now().toString(),
            JSON.stringify(repairRequestDoc)
        )

        try {
            let requestStatus = false
            requestStatus = await autoTrace.transfer(VIN, shop, event)
            if (requestStatus == undefined) {
                setAlertSeverity('success')
                setMessage('Success')
                setCollapsed(true)
            }
        } catch (error) {
            setAlertSeverity('error')
            setMessage('Something went wrong')
            setCollapsed(true)
        }
    }

    return (
        <div className={classes.background}>
            <Container maxWidth='lg'>
                <Collapse in={collapsed} onClick={() => { setCollapsed(false) }}>
                    <Alert severity={alertSeverity} variant='filled'>
                        <AlertTitle>{message}</AlertTitle>
                    </Alert>
                </Collapse>
                <Grid container justify='center' direction='column'>
                    <Grid item align='center' className={classes.heading}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Repair Request</Typography>
                    </Grid>
                    <Grid item align='center' className={classes.text}>
                        <Typography variant='h6'>We all have those days...</Typography>
                    </Grid>
                    <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
                        <Grid item>
                            <TextField label='VIN Number' variant='filled' color='primary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField label='Repair Shop ID' variant='filled' color='primary' value={shop} onChange={(e) => setShop(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField label='Repair Description' variant='filled' color='primary' multiline value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid item align='center' className={classes.button}>
                        <Button variant='contained' color='secondary' onClick={requestRepair}>Request Repair</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default RepairRequest