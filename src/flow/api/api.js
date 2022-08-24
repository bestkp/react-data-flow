import http from './axios'

let baseUrl = "https://uwzy5kpl.dnat.tech/"

/**
 * 获取角色
 * @param {*} data
 * @returns
 */
export function getRoles(data) {
  return http.get(`${baseUrl}roles.json`, { params: data })
}

/**
 * 获取部门
 * @param {*} data
 * @returns
 */
export function getDepartments(data) {
  return http.get(`${baseUrl}departments.json`, { params: data })
}

/**
 * 获取职员
 * @param {*} data
 * @returns
 */
export function getEmployees(data) {
  return http.get(`${baseUrl}employees.json`, { params: data })
}
/**
 * 获取条件字段
 * @param {*} data
 * @returns
 */
export function getConditions(data) {
  return http.get(`${baseUrl}conditions.json`, { params: data })
}

/**
 * 获取审批数据
 * @param {*} data
 * @returns
 */
export function getWorkFlowData(data) {
  return http.get(`${baseUrl}data.json`, { params: data })
}
/**
 * 设置审批数据
 * @param {*} data
 * @returns
 */
export function setWorkFlowData(data) {
  console.log('setWorkFlowData, post', data)
  // return http.post(`${baseUrl}`, data)
}
