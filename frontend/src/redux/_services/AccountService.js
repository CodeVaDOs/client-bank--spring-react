export const accountService = {
  get,
  deposit,
  withdraw,
  transfer
}


function get() {
  const rqOptions = {
    method: 'GET',
    headers:{
      "accepts":"application/json"
    }
  }

  return fetch("https://java-spring-app.herokuapp.com/api/account", rqOptions);
}

function deposit(number, amount) {
  const rqOptions = {
    method: 'POST',
    body: JSON.stringify({number, amount}),
    headers: {
      "Content-Type": "application/json"
    }
  }

  return fetch("https://java-spring-app.herokuapp.com/api/account/deposit", rqOptions);
}

function withdraw(number, amount) {
  const rqOptions = {
    method: 'POST',
    body: JSON.stringify({number, amount}),
    headers:{
      "Content-Type":"application/json"
    }
  }

  return fetch("https://java-spring-app.herokuapp.com/api/account/withdraw", rqOptions);
}

function transfer(numberFrom, numberTo, amount) {
  const rqOptions = {
    method: 'POST',
    body: JSON.stringify({numberFrom, numberTo, amount}),
    headers:{
      "Content-Type":"application/json"
    }
  }

  return fetch("https://java-spring-app.herokuapp.com/api/account/transfer", rqOptions);
};
