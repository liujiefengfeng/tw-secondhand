import * as fetchMock from 'fetch-mock';

fetchMock.mock(
  'http://secondhand.leanapp.cn/users/login',
  {
    username: 'Tom',
    sessionToken: '0shwjuon5x5bitvhy7wa27nt8'
  },
  {
    method: 'POST'
  }
);

fetchMock.mock(
  'http://secondhand.leanapp.cn/users/logout',
  "You have logged out successfully.",
  {
    method: 'GET'
  }
);
