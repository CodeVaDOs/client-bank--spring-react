import * as constants from "../_constants/CustomerConstants";

const initialState = {
  customerList: [],
  isLoading: false
}

export function customer (state = initialState, action) {
  switch (action.type) {
    case constants.GET_CUSTOMERS_REQUEST:
    case constants.CREATE_CUSTOMER_REQUEST:
    case constants.REMOVE_CUSTOMER_REQUEST:
    case constants.CREATE_ACCOUNT_REQUEST:
    case constants.REMOVE_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case constants.GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customerList: action.payload.customers,
        isLoading: false
      }

    case constants.CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerList: [...state.customerList, action.payload.customer]
      }

    case constants.REMOVE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerList: state.customerList.filter(c => c.id !== action.payload.customerId)
      }

    case constants.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        customerList: state.customerList.map(c => c.id === action.payload.customerId ? action.payload.customer : c)
      }

    case constants.GET_CUSTOMERS_FAILURE:
    case constants.CREATE_CUSTOMER_FAILURE:
    case constants.CREATE_ACCOUNT_FAILURE:
    case constants.REMOVE_CUSTOMER_FAILURE:
    case constants.REMOVE_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state;
  }
}
