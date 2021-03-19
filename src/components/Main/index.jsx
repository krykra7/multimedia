import React from "react";
import * as TITLES from "../../constants/titles"
import {Typography} from "@material-ui/core";
import BaseContent from "../BaseContent";

export default function Main() {
    return (
        <BaseContent title={TITLES.MAIN}>
            <Typography variant={"h4"}>
                <b>System identyfikacji wizualnej firmy ELECTRON</b>
            </Typography>
            <br/>
            <br/>
            <Typography variant={"h5"}>
                Projekt Semestralny
            </Typography>
            <Typography variant={"h5"}>
                Multimedia w e-biznesie
            </Typography>
            <Typography variant={"h5"}>
                Uniwersytet Ekonomiczny w Katowicach
            </Typography>
            <Typography variant={"h5"}>
                2020 / 2021
            </Typography>
        </BaseContent>
    )
};
