import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '20vh'
    },
    body1: {
        marginTop: '3vh'
    },
    inputField: {
        marginTop: '2.5vh'
    },
    button: {
        marginTop: '2vh'
    },
    background: {
        backgroundImage: 'url(/images/registerBKG.png)',
        backgroundOrigin: 'border-box',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        paddingTop: '80px',
        minHeight: '100vh',
        backgroundPosition: 'top'
    }
}));

export default useStyles;