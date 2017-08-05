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
    return null;
  });
};