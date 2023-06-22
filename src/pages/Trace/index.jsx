import React, { useState } from 'react'
import useStyles from './trace-style'
import { Button, Grid, Typography, TextField, Container, Accordion, AccordionSummary, AccordionDetails, LinearProgress, Alert, AlertTitle, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AutoTrace } from 'babbage-autotrace'
import Renderer from '../Renderer'

const autoTrace = new AutoTrace()

const Trace = () => {
  const classes = useStyles()
  const [VIN, setVIN] = useState('')
  const [events, setEvents] = useState([])
  const [alertSeverity, setAlertSeverity] = useState('info')
  const [message, setMessage] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)

  const traceVehicle = async () => {
    setLoading(true)
    try {
      const vehicleHistory = await autoTrace.trace(VIN)
      setEvents(vehicleHistory.events)
      if (vehicleHistory) {
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
      <Typography variant='h3' color='black' align='center' sx={{ fontWeight: 'bold' }}>TRACE</Typography>
      <Typography variant='h6' color='black' align='center'>We leave no stone unturned in revealing the complete vehicle story</Typography>
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
          </Grid>
          <Grid item align='center' className={classes.button}>
            {loading && <LinearProgress color='secondary' className={classes.progress} />}
            <Button disabled={loading} variant='contained' color='secondary' onClick={traceVehicle}>{loading ? 'Loading...' : 'Search'}</Button>
          </Grid>
        </Grid>
        <Grid container justify='center' direction='column'>
          {events.map((event, index) => (
            <div key={index}>
              <Grid item align='center' className={classes.button}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                  >
                    <Typography sx={{ color: 'text.secondary' }}> {event.eventType} - {event.description}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Renderer content={event.document} />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </div>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Trace
