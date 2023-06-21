import React, { useState } from 'react'
import useStyles from './request-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container, Alert, AlertTitle, Collapse, LinearProgress } from '@mui/material'
import { AutoTrace, ATEvent } from 'babbage-autotrace'

const autoTrace = new AutoTrace()

const RepairRequest = () => {
  const classes = useStyles()
  const [VIN, setVIN] = useState('')
  const [shop, setShop] = useState('')
  const [description, setDescription] = useState('')
  const [alertSeverity, setAlertSeverity] = useState('info')
  const [message, setMessage] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)

  const requestRepair = async () => {
    setLoading(true)
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
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classes.background}>
      <Typography variant='h3' color='black' align='center' sx={{ fontWeight: 'bold' }}>REPAIR REQUEST</Typography>
      <Typography variant='h6' color='black' align='center'>We all have those days...</Typography>
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
              <TextField disabled={loading} label='Repair Shop ID' variant='filled' color='secondary' value={shop} onChange={(e) => setShop(e.target.value)} />
            </Grid>
            <Grid item>
              <TextField disabled={loading} label='Repair Description' variant='filled' color='secondary' multiline value={description} onChange={(e) => setDescription(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item align='center' className={classes.button}>
            {loading && <LinearProgress color='secondary' className={classes.progress} />}
            <Button disabled={loading} variant='contained' color='secondary' onClick={requestRepair}>{loading ? 'Loading...' : 'Request Repair'}</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default RepairRequest