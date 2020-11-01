import request from '../utils/request'

export function fetchUsers (query) {
  return request({
    url: 'https://search.torre.co/people/_search/?size=20&aggregate=false&offset=0',
    method: 'post',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    data: JSON.stringify({
      name: {
        term: query.name
      }
    })
  })
}
