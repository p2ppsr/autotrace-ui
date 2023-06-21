import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  column_guide: {
    gridRowGap: '2.6em'
  },
  heading: {
    paddingTop: '9em'
  },
  text: {
    paddingTop: '2.5vh'
  },
  button: {
    marginTop: '4vh'
  },
  buttonBar: {
    gridColumnGap: '2em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
    maxWidth: '21em !important',
    margin: 'auto !important',
    justifySelf: 'center'
  },
  background: {
    backgroundImage: 'url(/images/homePageHeader.png)',
    backgroundOrigin: 'border-box',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  content_wrap: {
    paddingBottom: '9em'
  },
  solidBackground: {
    backgroundColor: 'white',
    marginTop: '5vh'
  },
}));

export default useStyles;