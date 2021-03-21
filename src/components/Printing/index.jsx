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

export default function Printing() {
    const classes = useStyles();

    return (
        <BaseContent title={TITLES.PRINTING}>
            <Typography align={"left"}>
                <p><b>• Papier firmowy:</b></p>
                Przygotowany papier firmowy ma format A4.
                Logo firmy znajduje się po lewej, górnej stronie. Notomiast
                adres strony znajduje się ma dole, po prawej stronie.
            </Typography><br/><br/>

            <img src={"company_paper.png"} alt={"company_paper.png"} className={classes.image}/>
            <br/><br/>

            <Typography align={"left"}>
                <p><b>• Koperta:</b></p>
                Przygotowana koperta firmowa ma format C6. Logo znajduje się w lewym górnym
                rogu koperty. Zaraz za logiem znajdują się dane kontaktowe firmy.
            </Typography><br/><br/>

            <img src={"post.png"} alt={"post.png"} className={classes.image}/>
        </BaseContent>
    )
};
