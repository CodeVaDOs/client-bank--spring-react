import {
  DEPOSIT_ACCOUNT_FAILURE,
  DEPOSIT_ACCOUNT_REQUEST,
  DEPOSIT_ACCOUNT_SUCCESS,
  GET_ACCOUNTS_FAILURE,
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS, TRANSFER_ACCOUNT_FAILURE,
  TRANSFER_ACCOUNT_REQUEST, TRANSFER_ACCOUNT_SUCCESS,
  WITHDRAW_ACCOUNT_FAILURE,
  WITHDRAW_ACCOUNT_REQUEST,
  WITHDRAW_ACCOUNT_SUCCESS
} from "../_constants/AccountConstants";

const initialState = {
  accountList: [],
  isLoading: false
}

export function account(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNTS_REQUEST:
    case TRANSFER_ACCOUNT_REQUEST:
    case DEPOSIT_ACCOUNT_REQUEST:
    case WITHDRAW_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accountList: action.payload.accounts,
        isLoading: false
      }

    case DEPOSIT_ACCOUNT_SUCCESS:
      return {
        ...state,
        accountList: state.accountList.map(acc => acc.number === action.payload.account.number ? action.payload.account : acc),
        isLoading: false
      }

    case WITHDRAW_ACCOUNT_SUCCESS:
      return {
        ...state,
        accountList: state.accountList.map(acc => acc.number === action.payload.account.number ? action.payload.account : acc),
        isLoading: false
      }


    case TRANSFER_ACCOUNT_SUCCESS:
      return {
        ...state,
        accountList: state.accountList.map(acc => action.payload.accounts.find(a => a.number == acc.number) || acc),
        isLoading: false
      }

    case DEPOSIT_ACCOUNT_FAILURE:
    case GET_ACCOUNTS_FAILURE:
    case WITHDRAW_ACCOUNT_FAILURE:
    case TRANSFER_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state;
  }
}
