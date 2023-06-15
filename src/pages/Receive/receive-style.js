import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
        paddingTop: '15vh'
    },
    text: {
        marginTop: '0.5vh'
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