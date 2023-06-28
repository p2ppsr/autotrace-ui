import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  content_wrap: {
    backgroundColor: '#313131',
    borderRadius: '0.5em',
    padding: '1.5em',
    boxSizing: 'border-box',
    color: 'white',
    marginTop: '1.5em',
    width: 'fit-content !important'
  },
  progress: {
    margin: '0.5em'
  },
  alert: {
    marginBottom: '0.5em'
  },
  text: {
    marginTop: '1em'
  },
  inputField: {
    marginTop: '5em'
  },
  button: {
    paddingTop: '1.5em'
  },
  background: {
    backgroundImage: 'url(/images/background.png)',
    backgroundOrigin: 'border-box',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
    paddingTop: '9em'
  },
}));

export default useStyles;