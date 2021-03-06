import React, {useState} from "react";
import {makeStyles, styled} from "@material-ui/styles";
import * as ROUTES from "../../constants/routes";
import * as TITLES from "../../constants/titles"
import {Routes} from "../App";
import {Tab, Tabs} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        width: '100%'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabsHeader: {
        width: "100%",
        height: theme.spacing(20),
        backgroundColor: theme.palette.primary.light
    },
    tabsFooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: theme.spacing(4),
        backgroundColor: theme.palette.primary.light
    }
}));

const StyledTab = styled(Tab)({
    fontWeight: "bold",
    fontSize: "1.2rem",
    fontFamily: [
        'Courier',
    ].join(","),
})

const idRouteMap = new Map([
    [0, ROUTES.MAIN],
    [1, ROUTES.CONCEPT],
    [2, ROUTES.TYPOGRAPHY],
    [3, ROUTES.LOGO],
    [4, ROUTES.CARD],
    [5, ROUTES.PRINTING],
]);

export default function Navigation() {
    const classes = useStyles();
    const [currentPageKey, setCurrentPageKey] = useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setCurrentPageKey(newValue);
        history.push(idRouteMap.get(newValue));
    };

    return (
        <div className={classes.root}>
            <div className={classes.tabsHeader}/>
            <Tabs orientation={"vertical"}
                  textColor={"secondary"}
                  value={currentPageKey}
                  onChange={handleChange}
                  className={classes.tabs}
            >
                <StyledTab label={TITLES.MAIN} value={0}/>
                <StyledTab label={TITLES.CONCEPT} value={1}/>
                <StyledTab label={TITLES.TYPOGRAPHY} value={2}/>
                <StyledTab label={TITLES.LOGO} value={3}/>
                <StyledTab label={TITLES.CARD} value={4}/>
                <StyledTab label={TITLES.PRINTING} value={5}/>
            </Tabs>
            <div className={classes.tabsFooter}/>
        </div>
    )
};
