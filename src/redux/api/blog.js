import request from '../../shared/request'

export function fetchPosts() {
  return request('5be5e3fa2f000082000fc3f8')
}

export function fetchAuthors() {
  return request('5be5e3ae2f00005b000fc3f6')
}
