import React from "react";
import {Route, Switch} from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import Main from "../Main";
import Card from "../Card";
import Logo from "../Logo";
import Printing from "../Printing";
import TypographyPage from "../Typography";
import Concept from "../Concept";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={ROUTES.MAIN} component={Main}/>
            <Route path={ROUTES.CARD} component={Card}/>
            <Route path={ROUTES.LOGO} component={Logo}/>
            <Route path={ROUTES.PRINTING} component={Printing}/>
            <Route path={ROUTES.TYPOGRAPHY} component={TypographyPage}/>
            <Route path={ROUTES.CONCEPT} component={Concept}/>
        </Switch>
    )
};
