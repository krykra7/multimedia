import React from "react";
import * as TITLES from "../../constants/titles"
import BaseContent from "../BaseContent";
import {Typography} from "@material-ui/core";

export default function Concept() {
    return (
        <BaseContent title={TITLES.CONCEPT}>
            <Typography align={"center"}>
                Firma dla której realizowany jest system identyfikacji wizualnej jest firmą
                technologiczną, oferującą oprogramowanie do tworzenie natywnych aplikacji
                desktopowych za pomocą technologii webowych - Electron.
                Charakteryzuje się działaniem wyłącznie internetowym. Firma jest
                aktywna w środowiskach technicznych oraz tworzących oprogramowanie,
                głównym miejscem promowania aplikacji jest github i linkedin.
                Nad projektem pracują pracownicy firmy, finansowanie projektu
                jest realizowane za pomocą dobrowolnych
                dotacji od użytkowników oraz za pomocą opłacanych licencji wymaganych
                dla użytkowników komercyjnych.
            </Typography>
        </BaseContent>
    )
};
