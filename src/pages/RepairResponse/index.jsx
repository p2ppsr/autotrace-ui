import React, { useState } from 'react'
import useStyles from './response-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container, Alert, AlertTitle, Collapse, LinearProgress } from '@mui/material'
import { AutoTrace, ATEvent } from '@cwi/autotrace'

const autoTrace = new AutoTrace()

const RepairResponse = () => {
  const classes = useStyles()
  const [VIN, setVIN] = useState('')
  const [owner, setOwner] = useState('')
  const [description, setDescription] = useState('')
  const [alertSeverity, setAlertSeverity] = useState('info')
  const [message, setMessage] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)

  const repairVehicle = async () => {
    setLoading(true)
    const repairResponseDoc = {
      VIN,
      owner,
      description
    }

    const event = new ATEvent(
      crypto.randomUUID(),
      'RepairResponse',
      'Repairs completed on a vehicle',
      Date.now().toString(),
      JSON.stringify(repairResponseDoc)
    )

    try {
      let responseStatus = false
      responseStatus = await autoTrace.transfer(VIN, owner, event)
      if (responseStatus == undefined) {
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
      <Typography variant='h3' color='black' align='center' sx={{ fontWeight: 'bold' }}>REPAIR RESPONSE</Typography>
      <Typography variant='h6' color='black' align='center'>Hit the ol' dusty trail</Typography>
      <Container maxWidth='lg' className={classes.content_wrap}>
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
              <TextField disabled={loading} label='Owner ID' variant='filled' color='secondary' value={owner} onChange={(e) => setOwner(e.target.value)} />
            </Grid>
            <Grid item>
              <TextField disabled={loading} label='Repair Description' variant='filled' color='secondary' multiline value={description} onChange={(e) => setDescription(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item align='center' className={classes.button}>
            {loading && <LinearProgress color='secondary' className={classes.progress} />}
            <Button disabled={loading} variant='contained' color='secondary' onClick={repairVehicle}>{loading ? 'Loading...' : 'Complete Repairs'}</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default RepairResponse