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
    wrongImage: {
        maxWidth: "100%",
        minWidth: "100%",
        transform: `rotate(20deg)`,
    },
}));

export default function Logo() {
    const classes = useStyles();

    return (
        <BaseContent title={TITLES.LOGO}>
            <Typography align={"left"}>
                Zaproponowane logo nawiązuje profilu działalności jakim jest tworzenie
                oprogramowania wspomagającego pracę programistów. Logo zawiera w sobie
                nazwę przedsiębiorstwa (Electron) oraz dużą literę "E", która jest wersją
                uzupełniającą loga, będzie wykorzystywana w miejscach w których nie możliwe
                jest wykorzystanie podstawowej wersji loga. W logu została użyta czcionka
                "nazwa czcionki"
            </Typography>

            <img src="final-logo.png" alt={"final-logo.png"} className={classes.image}/>

            <Typography align={"left"}>
                <p><b>• Pole podstawowe:</b></p>
                <p>Wymiary:</p>
                Logo nie ma określonego maksymalnego i minimalnego rozmiaru, logo powinno być
                responzywne zależnie od rozmiaru ekranu z którego korzysta użytkownik oraz
                jego rozdzielczości. Rozmiar loga powinien dopasować się do używanego
                przez użytkownika urządzenia. Jedynymi stałymi wartościami w przypadku rozmiaru
                będą rozmiary wykorzystywane na wizytówce lub, na papierze firmowym.
                <br/><br/>
                Obszar ochronny stworzony został w odniesniu do wysokości logotypu.
                Minimalny odstęp jaki należy zachować od logotypu do innego obiektu wynosi
                a, czyli połowę wysokości loga (rysunek poglądowy nie odzwierciedla dokładnie
                wymiaru).
            </Typography>

            <img src="final-logo-constraints.png" alt={"final-logo-constraints.png"} className={classes.image}/>

            <Typography align={"left"}>
                <p><b>• Pole ochronne:</b></p>
                Pole ochronne to obszarch w którym nie można umieszczać dodatkowych obiektów
                (grafiki, typografii), obszar został wyznaczony na podstawie prostokąta, który
                tworzy grafika loga. Wysokość i szerokość obszaru jest responsywna i zależy
                od urządzenia użytkownika.
            </Typography>

            <Typography align={"left"}>
                <p><b>• Wersja uzupełniająca:</b></p>
                Wersją uzupełniająca w firmie "Electron" będzie litera "E" z efektem trówymiarowości.
                Wersja uzupełniająca będzie wykorzystywana wszędzie tam gdzie
                nie jest możliwe użycie podstawowej wersji loga.
                <br/>
                <p>Wersja kolorowa:</p>

                <img src="final-icon.png" alt={"final-icon.png"} className={classes.image}/>

                <p><b>• Wersja monohromatyczna:</b></p>
                Wersja taka ma zastosowanie gdy druk kolorowy jest niemożliwy.

                <img src="final-icon-black-white.png" alt={"final-icon-black-white.png"} className={classes.image}/>
            </Typography>

            <Typography align={"left"}>
                <p><b>• Niewłaściwe zastosowanie loga:</b></p>

                Logo nie może być zrotowane:<br/><br/>
                <img src="final-logo.png" alt={"final-logo-constraints.png"} className={classes.wrongImage}/>

                Nie można w obszarze pola ochronnego umieszczać dodatkowej grafiki lub typografii:
                <img src="final-logo-invalid.png" alt="final-logo-invalid.png" className={classes.image}/>
            </Typography>

            <Typography align={"left"}>
                <p><b>• Wykorzystana w tworzeniu loga kolorystyka:</b></p>

                <p>Rozbarwienie RGB: </p>
                <img src="rgb.png" alt="rgb.png" className={classes.image}/>

                <p>Rozbarwienie CMYK: </p>
                <img src="cmyk.png" alt="cmyk.png" className={classes.image}/>
            </Typography>
        </BaseContent>
    );
};
