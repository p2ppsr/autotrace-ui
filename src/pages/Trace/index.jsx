import React, { useState } from 'react'
import useStyles from './trace-style'
import { Button, Grid, Typography, TextField, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AutoTrace, ATEvent } from 'babbage-autotrace'

const Trace = () => {
  const classes = useStyles()
  const [VIN, setVIN] = useState('')
  const [events, setEvents] = useState([])
  const autoTrace = new AutoTrace()

  const traceVehicle = async () => {
    const vehicleHistory = await autoTrace.trace(VIN)
    console.log(vehicleHistory.events)
    setEvents(vehicleHistory.events)
  }

  //   const [expanded, setExpanded] = React.useState < string | false > (false)

  return (
    <div>
      <div className={classes.background}>
        <Container maxWidth='lg'>
          <Grid container justify='center' direction='column'>
            <Grid item align='center' className={classes.heading}>
              <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Trace</Typography>
            </Grid>
            <Grid item align='center' className={classes.text}>
              <Typography variant='h6'>We leave no stone unturned in revealing the complete vehicle story</Typography>
            </Grid>
          </Grid>
          <Grid container justify='center' direction='column'>
            <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
              <Grid item>
                <TextField id='traceVinNumber' label='VIN Number' variant='filled' color='primary' value={VIN} onChange={(e) => setVIN(e.target.value)} />
              </Grid>
            </Grid>
            <Grid item align='center' className={classes.button}>
              <Button variant='contained' color='secondary' id='search' onClick={traceVehicle}>Search</Button>
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
                      <Typography>
                        {event.document}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </div>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Trace
