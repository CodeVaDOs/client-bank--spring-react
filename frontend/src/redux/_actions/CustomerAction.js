import {customerService} from "../_services/CustomerService";
import * as cosntants from "../_constants/CustomerConstants";

export const customerAction = {
  get,
  create,
  remove,
  createAccount,
  removeAccount
}

function get() {
  return (dispatch) => {
    dispatch(request());

    customerService.get()
      .then(customers => customers.json())
      .then(customers => dispatch(success(customers)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: cosntants.GET_CUSTOMERS_REQUEST};
  }

  function success(customers) {
    return {type: cosntants.GET_CUSTOMERS_SUCCESS, payload: {customers}};
  }

  function failure() {
    return {type: cosntants.GET_CUSTOMERS_FAILURE};
  }
}

function create(customer) {
  return (dispatch) => {
    dispatch(request());

    customerService.create(customer)
      .then(customer => customer.json())
      .then(customer => dispatch(success(customer)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: cosntants.CREATE_CUSTOMER_REQUEST};
  }

  function success(customer) {
    return {type: cosntants.CREATE_CUSTOMER_SUCCESS, payload: {customer}};
  }

  function failure() {
    return {type: cosntants.CREATE_CUSTOMER_FAILURE};
  }
}

function remove(customerId) {
  return (dispatch) => {
    dispatch(request());

    customerService.remove(customerId)
      .then(customer => customer.json())
      .then(customer => dispatch(success(customerId)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: cosntants.REMOVE_CUSTOMER_REQUEST};
  }

  function success(customerId) {
    return {type: cosntants.REMOVE_CUSTOMER_SUCCESS, payload: {customerId}};
  }

  function failure() {
    return {type: cosntants.REMOVE_CUSTOMER_FAILURE};
  }
}

function createAccount(customerId, account) {
  return (dispatch) => {
    dispatch(request());

    customerService.createAccount(customerId, account)
      .then(customer => customer.json())
      .then(customer => dispatch(success(customerId, customer)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: cosntants.CREATE_ACCOUNT_REQUEST};
  }

  function success(customerId, customer) {
    return {type: cosntants.CREATE_ACCOUNT_SUCCESS, payload: {customerId, customer}};
  }

  function failure() {
    return {type: cosntants.CREATE_ACCOUNT_FAILURE};
  }
}

function removeAccount(accountId) {
  return (dispatch) => {
    dispatch(request());

    customerService.removeAccount(accountId)
      .then(customer => customer.json())
      .then(customer => dispatch(success(accountId)))
      .catch(error => dispatch(failure()));
  }

  function request() {
    return {type: cosntants.REMOVE_ACCOUNT_REQUEST};
  }

  function success(accountId) {
    return {type: cosntants.REMOVE_ACCOUNT_SUCCESS, payload: {accountId}};
  }

  function failure() {
    return {type: cosntants.REMOVE_ACCOUNT_FAILURE};
  }
}
