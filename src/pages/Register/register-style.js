import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
        paddingTop: '15vh'
    },
    text: {
        marginTop: '0.5vh'
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
        minHeight: '100vh',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover'
    }
}));

export default useStyles;