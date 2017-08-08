import * as D from '../definitions';

export const login = (user: D.UserForLogin): Promise<D.User> => {
  const response = fetch('http://secondhand.leanapp.cn/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: user.username,
      password: user.password
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return response.then((Response) => {
    if (Response.status === 200) {
      return Response.json();
    }
  });
};

export const logout = (sessionToken: string): Promise<D.User> => {
  const response = fetch('http://secondhand.leanapp.cn/users/logout', {
    method: 'GET',
    body: JSON.stringify({sessionToken}),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  return response.then((Response) => {
    if (Response.status === 200) {
      return Response.json();
    }
  });
};
