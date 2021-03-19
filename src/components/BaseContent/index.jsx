import React from "react";
import {Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(8),
        height: theme.spacing(28),
        width: '100%',
        backgroundColor: theme.palette.primary.light,

    },
    content: {
        overflow: "auto",
        maxHeight: "80vh",
        maxWidth: '100%',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        paddingRight: theme.spacing(16),
        paddingLeft: theme.spacing(16)
    },
    logoIcon: {
        minWidth: '50%',
        minHeight: '50%',
        maxWidth: '100%',
        maxHeight: '100%',
    }
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
            <Container className={classes.content}>
                {children}
            </Container>
        </div>
    )
};
