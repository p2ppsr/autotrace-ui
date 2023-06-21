import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    content_wrap: {
        backgroundColor: '#313131',
        borderRadius: '0.5em',
        padding: '1.5em',
        boxSizing: 'border-box',
        color: 'white',
        marginTop: '1.5em'
    },
    progress: {
        margin: '0.5em'
    },
    alert: {
        marginBottom: '0.5em'
    },
    heading: {
        // paddingTop: '15vh'
    },
    text: {
        marginTop: '0.5vh'
    },
    inputField: {
        marginTop: '2.5vh'
    },
    button: {
        paddingTop: '1.5em'
    },
    background: {
        backgroundImage: 'url(/images/registerBKG.png)',
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