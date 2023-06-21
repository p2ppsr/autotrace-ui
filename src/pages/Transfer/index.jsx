import React, { useState } from 'react'
import useStyles from './transfer-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container, Alert, AlertTitle, Collapse, LinearProgress } from '@mui/material'
import { AutoTrace, ATEvent } from 'babbage-autotrace'

const autoTrace = new AutoTrace()

const Transfer = () => {
  const classes = useStyles()
  const [VIN, setVIN] = useState('')
  const [recipient, setRecipient] = useState('')
  const [alertSeverity, setAlertSeverity] = useState('info')
  const [message, setMessage] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)

  const transferVehicle = async () => {
    setLoading(true)
    const transferDoc = {
      VIN,
      recipient
    }

    const event = new ATEvent(
      crypto.randomUUID(),
      'TransferTitle',
      'Transfer a vehicle to a new owner',
      Date.now().toString(),
      JSON.stringify(transferDoc)
    )

    try {
      let transferStatus = false
      transferStatus = await autoTrace.transfer(VIN, recipient, event)
      if (transferStatus == undefined) {
        setAlertSeverity('success')
        setMessage('Success')
        setCollapsed(true)
      }
    } catch (error) {
      setAlertSeverity('error')
      setMessage('Something went wrong')
      setCollapsed(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classes.background}>
      <Typography variant='h3' color='black' align='center' sx={{ fontWeight: 'bold' }}>TRANSFER</Typography>
      <Typography variant='h6' color='black' align='center' >From one buyer to the next</Typography>
      <Container maxWidth='lg' className={classes.content_wrap} >
        <Collapse in={collapsed} onClick={() => { setCollapsed(false) }}>
          <Alert severity={alertSeverity} variant='filled' className={classes.alert}>
            <AlertTitle>{message}</AlertTitle>
          </Alert>
        </Collapse>
        <Grid container justify='center' direction='column'>
          <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
            <Grid item>
              <TextField disabled={loading} label='VIN Number' variant='filled' color='secondary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
            </Grid>
            <Grid item>
              <TextField disabled={loading} label='Recipient ID' variant='filled' color='secondary' value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item align='center' className={classes.button}>
            {loading && <LinearProgress color='secondary' className={classes.progress} />}
            <Button disabled={loading} variant='contained' color='secondary' onClick={transferVehicle}>{loading ? 'Loading...' : 'Transfer'}</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Transfer