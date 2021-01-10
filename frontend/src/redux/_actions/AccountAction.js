import {accountService} from "../_services/AccountService";
import {
  DEPOSIT_ACCOUNT_FAILURE,
  DEPOSIT_ACCOUNT_REQUEST,
  DEPOSIT_ACCOUNT_SUCCESS,

  GET_ACCOUNTS_FAILURE,
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,

  TRANSFER_ACCOUNT_FAILURE,
  TRANSFER_ACCOUNT_REQUEST,
  TRANSFER_ACCOUNT_SUCCESS,

  WITHDRAW_ACCOUNT_FAILURE,
  WITHDRAW_ACCOUNT_REQUEST,
  WITHDRAW_ACCOUNT_SUCCESS
} from "../_constants/AccountConstants";

export const accountAction = {
  get,
  deposit,
  withdraw,
  transfer,
}

function get() {
  return (dispatch) => {
    dispatch(request());

    accountService.get()
      .then(accounts => accounts.json())
      .then(accounts => dispatch(success(accounts)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: GET_ACCOUNTS_REQUEST};
  }

  function success(accounts) {
    return {type: GET_ACCOUNTS_SUCCESS, payload: {accounts}};
  }

  function failure() {
    return {type: GET_ACCOUNTS_FAILURE};
  }
}

function deposit(number, amount) {
  return (dispatch) => {
    dispatch(request());

    accountService.deposit(number, amount)
      .then(account => account.json())
      .then(account => dispatch(success(account)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: DEPOSIT_ACCOUNT_REQUEST};
  }

  function success(account) {
    return {type: DEPOSIT_ACCOUNT_SUCCESS, payload: {account}};
  }

  function failure() {
    return {type: DEPOSIT_ACCOUNT_FAILURE};
  }
}

function withdraw(number, amount) {
  return (dispatch) => {
    dispatch(request());

    accountService.withdraw(number, amount)
      .then(account => account.json())
      .then(account => dispatch(success(account)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: WITHDRAW_ACCOUNT_REQUEST};
  }

  function success(account) {
    return {type: WITHDRAW_ACCOUNT_SUCCESS, payload: {account}};
  }

  function failure() {
    return {type: WITHDRAW_ACCOUNT_FAILURE};
  }
}

function transfer(number, numberFor, amount) {
  return (dispatch) => {
    dispatch(request());

    accountService.transfer(number, numberFor, amount)
      .then(accounts => accounts.json())
      .then(accounts => dispatch(success(accounts)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: TRANSFER_ACCOUNT_REQUEST};
  }

  function success(accounts) {
    return {type: TRANSFER_ACCOUNT_SUCCESS, payload: {accounts}};
  }

  function failure() {
    return {type: TRANSFER_ACCOUNT_FAILURE};
  }
}
