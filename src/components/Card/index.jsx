import React from "react";
import * as TITLES from "../../constants/titles"
import {Typography} from "@material-ui/core";
import BaseContent from "../BaseContent";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles";

const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: "100%",
        minWidth: "100%",
    },
}));

export default function Card() {
    const classes = useStyles();

    return (
        <BaseContent title={TITLES.CARD}>
            <Typography align={"left"}>
                Wizytówka została przygotowana w formacie 90x55mm.
                Wizytówka jest jednostronna i prezentuje następujące dane:
            </Typography>
            <br/>

            <img src="wizytowka.png" alt={"wizytowka.png"} className={classes.image}/>
            <br/>
            <br/>

            <Typography align={"left"}>
                Kolorystyka:
            </Typography>
            <br/>

            <img src="colors-card.png" alt={"colors-card.png"} className={classes.image}/>
        </BaseContent>
    )
};
