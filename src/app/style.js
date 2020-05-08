import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    grid: {
        marginTop: '300px',
        width: '100%',
        flexGrow: 1,
        margin: '0px', //ojo
        padding: '2px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '300px',
            width: '100%',
            flexGrow: 1,
            margin: '0px', //ojo

        },
    },
    button: {
        background: "-webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%)",


        marginTop: "3rem",


        border: " 2px solid black",
        transition: "background-size .8s ease",

        width: '35%',
        backgroundColor: 'rgba(77, 174, 189, 0.90)',
        color: 'white',
        textTransform: 'none',
        borderRadius: '2px',
        '&:hover': {

            backgroundColor: 'rgba(77, 174, 189, 0.87)',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            flexGrow: 1,
       

            marginTop: "3rem",

        },
    },


    typo: {
        fontFamily: 'Geneva, Tahoma, sans-serif',
    }
}));
export default useStyles;