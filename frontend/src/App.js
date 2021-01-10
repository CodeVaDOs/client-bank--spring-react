import React, {useEffect, useMemo, useState} from "react";
import Header from "./component/Header";
import {createStyles, makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Route} from 'react-router-dom';
import CustomersPage from "./page/CustomerPage/CustomersPage";
import AccountsPage from "./page/AccountPage/AccountsPage";
import {useTranslation} from "react-i18next";


const useStyles = makeStyles((theme) => createStyles({
  pageContainer: {
    paddingTop: 64 + 'px',
    paddingLeft: 0,
    transition: .2 + 's linear'

  },
  pageContainerOpenedSidebar: {
    paddingTop: 64 + 'px',
    paddingLeft: 220 + 'px',
    transition: .1 + 's linear'
  }
}))

function App(props) {
  const [isOpen, handleOpen] = useState(false);
  const classes = useStyles();
  const [ t ] = useTranslation();

  return (
    <div className="App" key={'left'}>
      <CssBaseline/>
      <div className={isOpen ? classes.pageContainerOpenedSidebar : classes.pageContainer}>
        <Header isOpen={isOpen} handleOpen={handleOpen}/>
        <Route exact={true} path="/customers" component={CustomersPage}/>
        <Route exact={true} path="/accounts" component={AccountsPage}/>
      </div>
    </div>
  );
}


export default App;

