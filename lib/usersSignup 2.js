const url = 'http://localhost:5000/users/register';

function postUserInfo(e) {
  e.preventDefault();
  const form = document.getElementById('signup-form');
  const formData = new FormData(form);
  const keys = [];
  const values = [];

  for (const value of formData.values()) {
    values.push(value);
  }

  for (const key of formData.keys()) {
    keys.push(key);
  }
  console.log('keys', keys);
  console.log('values', values);

  const userInfo = {};
  for (let i = 0; i < keys.length; i++) userInfo[keys[i]] = values[i];

  console.log('USERINFO', userInfo);
  console.log(userInfo.firstName);

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(response => {
      response.json();
    })
    .then(data => console.log('DATA', data))
    .catch(error =>
      console.error(`Can’t access ${url} response. Blocked by browser?`)
    );
}