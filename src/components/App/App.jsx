import React from "react";
import {HashRouter as Router, Route} from 'react-router-dom';
import Routes from "./Routes";
import {createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import Navigation from "../Navigation";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Courier', 'Lato'
        ].join(","),
    },
    palette: {
        primary: {
            light: '#e68762',
            main: '#b05937',
            dark: '#7c2d0e',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#6ebee2',
            main: '#378eb0',
            dark: '#006180',
            contrastText: '#000000'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html, body': {
                    height: '100%',
                    minHeight: '100%:',
                },
                '#root': {
                    height: '100%',
                    minHeight: '100%',
                },
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    navigation: {
        [theme.breakpoints.down('sm')]: {
            width: "30%",
        },
        [theme.breakpoints.up('md')]: {
            width: "20%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "10%",
        },
    },
    content: {
        [theme.breakpoints.down('sm')]: {
            width: "70%",
        },
        [theme.breakpoints.up('md')]: {
            width: "80%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "90%",
        },
        overflow: 'hidden',
        textAlign: 'center',
        justifyContent: 'center',
    }
}))

function App() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={responsiveFontSizes(theme)}>
            <CssBaseline/>
            <Router>
                <div className={classes.root}>
                    <div className={classes.navigation}>
                        <Navigation/>
                    </div>
                    <div className={classes.content}>
                        <Routes/>
                    </div>
                </div>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
