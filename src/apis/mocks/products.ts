import * as fetchMock from 'fetch-mock';

const boughtProducts = [{
  description: '电影票4\n',
  name: '战狼4',
  buyer: {username: 'testuser', objectId: '596de9a5570c35005b513e5c'},
  price: '50',
  owner: {username: 'test1', objectId: '598029018d6d810058f95684'},
  img: 'http://ac-o3K0VdL1.clouddn.com/5b243969534be4f23f06.jpg',
  objectId: '598431ff570c3500620ddb0f',
  createdAt: '2017-08-04T08:36:15.640Z',
  updatedAt: '2017-08-04T10:55:03.765Z'
}, {
  description: '清洁小能手，妈妈再也不会说我懒了！',
  name: '扫地机器人',
  buyer: {username: 'testuser', objectId: '596de9a5570c35005b513e5c'},
  price: '2000',
  owner: {username: 'zenglei', objectId: '596dcde4fe88c2c1d4117a96'},
  img: 'http://ac-o3k0vdl1.clouddn.com/48b4b293ef82b71678af.jpg',
  objectId: '59811f291b69e6006c887c38',
  createdAt: '2017-08-02T00:39:05.476Z',
  updatedAt: '2017-08-02T03:45:01.108Z'
}, {
  description: '煮饭很好用！',
  name: '电饭煲',
  buyer: {username: 'testuser', objectId: '596de9a5570c35005b513e5c'},
  price: '200',
  owner: {username: 'zenglei', objectId: '596dcde4fe88c2c1d4117a96'},
  img: 'http://ac-o3K0VdL1.clouddn.com/e1443c4138e969483933.jpeg',
  objectId: '59806557fe88c20057f52dde',
  createdAt: '2017-08-01T11:26:15.319Z',
  updatedAt: '2017-08-01T11:36:32.413Z'
}, {
  description: 'cheap and nice!!!!',
  name: 'cup',
  buyer: {username: 'testuser', objectId: '596de9a5570c35005b513e5c'},
  price: '10',
  owner: {username: 'zenglei', objectId: '596dcde4fe88c2c1d4117a96'},
  img: 'http://ac-o3k0vdl1.clouddn.com/48b4b293ef82b71678af.jpg',
  objectId: '5979c6f4570c3500628c8093',
  createdAt: '2017-07-27T10:56:52.982Z',
  updatedAt: '2017-07-30T14:06:53.158Z'
}];

fetchMock.mock('http://secondhand.leanapp.cn/products/bought', {status: 200, body: boughtProducts}, {method: 'GET'});
