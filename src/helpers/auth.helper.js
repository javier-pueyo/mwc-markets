const fakeUsers = [
  {email: 'alumno@upgrade.com', password: '1234asdf', name: 'Paco', lastName: 'Candela' },
  {email: 'profesor@upgrade.com', password: '1234asdf', name: 'Antonio', lastName: 'Rosales' },
];

export const checkUser = (form) => {
  return fakeUsers.find((user) => {
    return form.email === user.email && form.password === user.password;
  });
};

