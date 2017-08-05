import * as fetchMock from 'fetch-mock';

fetchMock.mock('http://secondhand.leanapp.cn/users/login', {username: 'Tom'}, {method: 'POST'});