import Mock from 'mockjs';

Mock.mock('http:localhost:8080/mock/data/list', 'get', () => {
  return {
    code: 200,
    msg: '123',
    data: [
      {id: name, name: '数据'}
    ]
  }
});