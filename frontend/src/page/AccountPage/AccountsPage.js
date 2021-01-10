import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import {accountAction} from "../../redux/_actions/AccountAction";
import AccountForm from "./AccountForm";
import Grid from "@material-ui/core/Grid";
import AccountTable from "./AccountTable";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


function AccountsPage(props) {
  const {dispatch} = props;
  const [accounts, setAccounts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    dispatch(accountAction.get());
  }, [])

  useEffect(() => {
    if (JSON.stringify(accounts) !== JSON.stringify(props.account.accountList)) {
      setAccounts(props.account.accountList);
    }
  }, [props.account])


  function handleSubmitForm(amount, number, numberFor, type) {
    switch (type) {
      case 'withdraw':
        dispatch(accountAction.withdraw(number, amount));
        break;
      case 'deposit':
        dispatch(accountAction.deposit(number, amount));
        break;
      case 'transfer':
        dispatch(accountAction.transfer(number, numberFor, amount));
        break;
    }
  }

  return (
    <div>
      {accounts.length > 0 && (
        <React.Fragment>

          <Grid className={classes.root} container spacing={1}>
            <AccountForm
              size={4}
              handleSubmit={handleSubmitForm}
              type="deposit"
              accounts={accounts}
            />

            {accounts.length > 1 &&
            <AccountForm
              size={4}
              handleSubmit={handleSubmitForm}
              type="transfer"
              accounts={accounts}
            />}

            <AccountForm
              size={4}
              handleSubmit={handleSubmitForm}
              type="withdraw"
              accounts={accounts}
            />


          </Grid>

          <AccountTable accounts={accounts}/>


        </React.Fragment>
      ) || <LinearProgress color="primary" />}
    </div>
  );
}

const mapStateToProps = (state) => {
  const {account} = state;
  return {
    account,
  }
}

export default connect(mapStateToProps)(AccountsPage);
