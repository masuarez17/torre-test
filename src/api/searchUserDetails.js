import request from '../utils/request'

export function searchDetails (username) {
  return request({
    url: 'https://torre.bio/api/bios/' + username,
    method: 'get',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
