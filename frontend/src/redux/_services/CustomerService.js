export const customerService = {
  get,
  create,
  remove,
  createAccount,
  removeAccount

}


function get() {
  const rqOptions = {
    method: 'GET',
    headers:{
      "accepts":"application/json"
    }
  }

  return fetch("https://java-spring-app.herokuapp.com/api/customer", rqOptions);
}

function create(customer) {
  const rqOptions = {
    method: 'POST',
    headers:{
      "accepts":"application/json"
    },
    body: JSON.stringify(customer)
  }

  return fetch("https://java-spring-app.herokuapp.com/api/customer", rqOptions);
}

function remove(customerId) {
  const rqOptions = {
    method: 'DELETE',
    headers:{
      "accepts":"application/json"
    }
  }

  return fetch(`https://java-spring-app.herokuapp.com/api/customer/${customerId}`, rqOptions);
}

function createAccount(customerId, account) {
  const rqOptions = {
    method: 'POST',
    headers:{
      "accepts":"application/json"
    },
    body: JSON.stringify(account)
  }

  return fetch(`https://java-spring-app.herokuapp.com/api/customer/${customerId}/account`, rqOptions);
}


function removeAccount(accountId) {
  const rqOptions = {
    method: 'DELETE',
    headers:{
      "accepts":"application/json"
    }
  }

  return fetch(`https://java-spring-app.herokuapp.com/api/customer/account/${accountId}`, rqOptions);
}


