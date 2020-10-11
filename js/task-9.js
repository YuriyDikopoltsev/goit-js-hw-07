function isLoginValid(login, min = 4, max = 16) {
  if (login.length < min || login.length > max) {
    // console.log(login.length);
    return false;
  } else {
    return true;
  }
}

function isLoginUnique(allLogins, login) {
  'use strict';
  for (let testLogin of allLogins) {
    // console.table(testLogin);
    if (testLogin == login) {
      return false;
    } else {
      return true;
    }
  }
}

function addLogin(allLogins, login) {
  'use strict';

  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';

  let message;
  if (isLoginValid(login) == false) {
    message = ERROR;
  } else if (isLoginUnique(allLogins, login) === false) {
    message = REFUSAL;
  } else {
    allLogins.push(login);
    message = SUCCESS;
  }

  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
