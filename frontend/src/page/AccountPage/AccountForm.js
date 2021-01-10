import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {Button, makeStyles} from "@material-ui/core";
import React, {useState} from "react";
import {useTranslation, withTranslation} from "react-i18next";
import {CompareArrows} from "@material-ui/icons";

const useStyles = makeStyles({
  block: {
    height: 400 + 'px',
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20 + "px !important",
  },

  formControl: {
    minWidth: 120,
    maxWidth: 600,
  },

  title: {
    marginBottom: 20 + "px",
  },

  inputLabel: {
    marginBottom: 15 + "px",
  },

  inputTransferLabel: {
    top: 12 + "px",
    left: 12 + "px",
  },

  numberField: {
    marginBottom: 15 + "px",
  },

  transferGrid: {
    position: 'relative'
  }

})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getTypeLabel(type, labelFor) {
  switch (labelFor) {
    case 'button':
      switch (type) {
        case 'withdraw':
          return 'Снять';
        case 'deposit':
          return 'Пополнить';
        case 'transfer':
          return 'Перевести';
      }
    case 'title':
      switch (type) {
        case 'withdraw':
          return 'Снятие со счета';
        case 'deposit':
          return 'Пополнение счета';
        case 'transfer':
          return 'Перевод';
      }
  }
}

function AccountForm(props) {
  const {size, accounts, handleSubmit, type} = props;
  const [t, i18n] = useTranslation();


  const [account, setAccount] = useState(accounts[0]);
  const [accountFor, setAccountFor] = useState(accounts[1]);
  const [amount, setAmount] = useState(0);



  const classes = useStyles();

  function handleChange(event) {
    switch (event.target.name) {
      case 'amount-field':
        setAmount(parseFloat(event.target.value));
        break;
      case 'account-select':
        setAccount(accounts.find(a => a.number === event.target.value));
        break;
      case 'accountFor-select':
        setAccountFor(accounts.find(a => a.number === event.target.value));
    }
  }

  function swapAccountsToTransfer() {
    const temp = account;
    setAccount(accountFor);
    setAccountFor(temp);
  }


  return (
      <Grid className={classes.block} item md={size} xs={12}>
        <Typography className={classes.title} variant="h4">
          {t(getTypeLabel(type,'title'))}
        </Typography>

        <FormControl className={classes.formControl}>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <InputLabel className={classes.inputLabel}>{t("Счет")}</InputLabel>
              <Select
                className={classes.title}
                name="account-select"
                value={account.number}
                onChange={handleChange}
                input={<Input/>}
                MenuProps={MenuProps}
              >
                {accounts.filter(a => type === 'transfer' ? a.number !== accountFor.number : true).map((account) => (
                  <MenuItem key={account.number} value={account.number}>
                    {account.number} ({account.balance.toFixed(2)} {account.currency})
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {type === 'transfer' &&
            <React.Fragment>
              <CompareArrows onClick={swapAccountsToTransfer} xs={2}/>

              <Grid item xs={5} className={classes.transferGrid}>
                <InputLabel className={classes.inputTransferLabel}>{t("На счет")}</InputLabel>
                <Select
                  className={classes.title}
                  name="accountFor-select"
                  value={accountFor.number}
                  onChange={handleChange}
                  input={<Input/>}
                  MenuProps={MenuProps}
                >
                  {accounts.filter(a => a.number !== account.number).map((account) => (
                    <MenuItem key={account.number} value={account.number}>
                      {account.number} ({account.balance.toFixed(2)} {account.currency})
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </React.Fragment>
            }
          </Grid>

          <TextField
            className={classes.numberField}
            name="amount-field"
            label={t("Сумма")}
            type="number"
            value={amount}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button onClick={() => {
            handleSubmit(amount, account.number, accountFor.number, type);
            setAmount(0);
          }} color="primary" variant="contained">{t(getTypeLabel(type, 'button'))}</Button>

        </FormControl>
      </Grid>

  )
}

export default AccountForm;
