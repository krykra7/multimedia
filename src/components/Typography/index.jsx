import React from "react";
import * as TITLES from "../../constants/titles"
import BaseContent from "../BaseContent";
import {Typography} from "@material-ui/core";

export default function TypographyPage() {
    return (
        <BaseContent title={TITLES.TYPOGRAPHY}>
            <Typography align={"left"}>
                Do pracy zostały wybrane dwie czcionki.<br/>

                Czcionka podstawowa będzie służyła aby przekazać klientom wszystkie
                najważniejsze informacje na stronie internetowej.<br/>
                Wybrana czcionka: "Varela Round"; w wariancie "h5" <br/><br/>

                <Typography variant={"h5"} style={{fontFamily: "Courier"}}>
                    Przykład wybranej czcionki: <b>WYBRANA CZCIONKA</b>
                </Typography>
            </Typography>

            <br/>

            <Typography align={"left"} style={{fontFamily: "Lato"}}>
                Czcionka uzupełniająca. Ta czcionka będzie służyła do stworzenia loga firmy. <br/>
                Wybrana czcionka: "Lato"; w wariancie "h5" <br/><br/>

                <Typography variant={"h5"} style={{fontFamily: "Lato"}}>
                    Przykład wybranej czcionki: <b>WYBRANA CZCIONKA</b>
                </Typography>
            </Typography>
        </BaseContent>
    )
};
