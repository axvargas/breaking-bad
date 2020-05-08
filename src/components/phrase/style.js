import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    grid: {
        marginTop:'300px',
        width: '100%',
        flexGrow: 1,
        margin: '0px', //ojo
        padding: '2px',
        [theme.breakpoints.down('sm')]: {
            marginTop:'300px',
            width: '100%',
            flexGrow: 1,
            margin: '0px', //ojo

        },
    },
    paper: {
        maxWidth:'500px',
        padding: theme.spacing(2),
        textAlign: 'left',
        borderRadius: '2px',
        width: '75%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    typo:{
        fontFamily: 'Arial, Helvetica, sans-serif',
        
    },
    typoP: {
        fontFamily: 'Geneva, Tahoma, sans-serif',
        textAlign: 'right',
        color:'grey'
    }
    

}));
export default useStyles;