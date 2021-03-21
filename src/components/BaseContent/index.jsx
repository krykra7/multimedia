import React from "react";
import {Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(4),
        height: theme.spacing(20),
        width: '100%',
        backgroundColor: theme.palette.primary.light,

    },
    content: {
        overflow: "auto",
        maxHeight: "80vh",
        minWidth: '100%',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(15),
            paddingLeft: theme.spacing(15)
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(20),
            paddingLeft: theme.spacing(20)
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(50),
            paddingLeft: theme.spacing(50)
        },
    },
}))

export default function BaseContent(props) {
    const classes = useStyles();
    const {title, children} = props;

    return (
        <div>
            <Container className={classes.title} maxWidth>
                    <Typography variant={"h1"} color={"secondary"}>
                        {title}
                    </Typography>
            </Container>
            <Container className={classes.content} maxWidth>
                {children}
            </Container>
        </div>
    )
};
