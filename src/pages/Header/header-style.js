import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    header: {
        // height: '10vh',
        backgroundColor: 'white'
    },
    nav_wrap: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridColumnGap: '1.5em',
        width: '1440px',
        margin: 'auto'
    },
    item: {
        textDecoration: 'none',
        color: 'black',
        marginLeft: '2%',
        marginRight: '2%',
        transition: 'all 0.3s',
        '&:hover': {
            color: '#DB7640'
        }
    },
    logo: {
        width: '9.89em',
        marginBottom: '0.5em',
        marginTop: '0.5em',
        backgroundColor: 'white !important',
        [theme.breakpoints.down('lg')]: {
            width: '7em'
        }
    },
    links_wrap: {
        alignItems: 'center',
        gridColumnGap: '1em',
        justifyContent: 'end'
    }
}));

export default useStyles;