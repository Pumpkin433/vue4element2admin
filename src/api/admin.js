import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function logout(data) {
  return request({
    url: '/admin/logout',
    method: 'post',
    data
  })
}

export function indexCount(params) {
  return request({
    url: '/admin/index',
    method: 'get',
    params
  })
}

export function categoryList(params) {
  return request({
    url: '/admin/getObjectList',
    method: 'get',
    params
  })
}
export function updateObject(data) {
  return request({
    url: '/admin/updateObject',
    method: 'post',
    data
  })
}
