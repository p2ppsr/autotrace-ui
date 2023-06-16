import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    heading: {
        paddingTop: '15vh'
    },
    text: {
        paddingTop: '2.5vh'
    },
    button: {
        marginTop: '4vh'
    },
    buttonBar: {
        marginTop: '25vh'
    },
    background: {
        backgroundImage: 'url(/images/homePageHeader.png)',
        backgroundOrigin: 'border-box',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    solidBackground: {
        backgroundColor: 'white',
        marginTop: '5vh'
    },
}));

export default useStyles;