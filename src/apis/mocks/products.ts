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
const soldProducts = [
  {
    description: 'very nice iphone 6s',
    name: 'iphone 8s',
    buyer: {
      username: 'zenglei',
      objectId: '596dcde4fe88c2c1d4117a96'
    },
    price: '3000',
    owner: {
      username: 'testuser',
      objectId: '596de9a5570c35005b513e5c'
    },
    img: 'http://ac-o3K0VdL1.clouddn.com/e1443c4138e969483933.jpeg',
    objectId: '597ee7daa0bb9f005828a02e',
    createdAt: '2017-07-31T08:18:34.408Z',
    updatedAt: '2017-08-02T04:06:12.402Z'
  },
  {
    description: '9成新！',
    name: 'ipad2',
    buyer: {
      username: 'zenglei',
      objectId: '596dcde4fe88c2c1d4117a96'
    },
    price: '1000',
    owner: {
      username: 'testuser',
      objectId: '596de9a5570c35005b513e5c'
    },
    img: 'http://ac-o3k0vdl1.clouddn.com/48b4b293ef82b71678af.jpg',
    objectId: '5981223e128fe1005653c01e',
    createdAt: '2017-08-02T00:52:14.129Z',
    updatedAt: '2017-08-02T01:09:23.934Z'
  }
];

const homeProducts = [
  {
    'description': 'CD',
    'name': 'CD',
    'price': '666',
    'owner': {
      'username': 'warner',
      'objectId': '59809742128fe100564f0d24'
    },
    'img': 'http://ac-o3K0VdL1.clouddn.com/0864c6db9feb2b5b25af.jpg',
    'objectId': '59851ffaa22b9d006da10f78',
    'createdAt': '2017-08-05T01:31:38.138Z',
    'updatedAt': '2017-08-05T01:31:38.138Z'
  },
  {
    'description': '电影票',
    'name': '战狼2',
    'price': '50',
    'owner': {
      'username': 'test1',
      'objectId': '598029018d6d810058f95684'
    },
    'img': 'http://ac-o3K0VdL1.clouddn.com/e9dc3c720e46a499714f.jpg',
    'objectId': '59829705a0bb9f005857afc2',
    'createdAt': '2017-08-03T03:22:45.450Z',
    'updatedAt': '2017-08-03T03:22:45.450Z'
  }
];

fetchMock.mock('http://secondhand.leanapp.cn/products/bought', {status: 200, body: boughtProducts}, {method: 'GET'});
fetchMock.mock('http://secondhand.leanapp.cn/products/owned', {status: 200, body: soldProducts}, {method: 'GET'});
fetchMock.mock('http://secondhand.leanapp.cn/products/', {status: 200, body: homeProducts}, {method: 'GET'});