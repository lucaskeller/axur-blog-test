import config from '../config'

const { API_BASE } = config
const queryString = require('query-string')

const isLiteralObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

const jsonBody = response => {
  try {
    return response.json()
  } catch (err) {
    console.warn('The server did not send a JSON response', err)
    return {}
  }
}

const request = async (path, options) => {
  options = Object.assign({}, options, {})

  const { body, qsParams } = options
  if (isLiteralObject(body)) {
    options.body = JSON.stringify(body)
    options.headers = Object.assign(options.headers || {}, {
      'Content-Type': 'application/json'
    })
  }
  const qs = qsParams ? `?${queryString.stringify(qsParams)}` : ''
  const response = await fetch(`${API_BASE}/${path}/${qs}`, options)
  const json = await jsonBody(response)
  const createError = () => new Error(json.error || response.statusText || 'Unexpected error')
  if (response.status === 401) {
    throw new Error(createError())
  }
  if (!response.ok) {
    throw new Error(createError())
  }
  return json
}

export default request
