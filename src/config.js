const envs = {
  local: {
    ENV: 'local',
    API_BASE: 'http://www.mocky.io/v2'
  },
  dev: {
    ENV: 'development'
  },
  prod: {
    ENV: 'production'
  }
}

// Expected hosts:
// local  :   local.axurtest.com.br
// dev    :   dev.axurtest.com.br
// prod   :   axurtest.com.br

const localHostnames = ['local.axurtest.com.br', 'localhost', '127.0.0.1']

const calculateConfig = () => {
  const { host, hostname, protocol } = window.location
  if (localHostnames.indexOf(hostname) >= 0) {
    return envs['local']
  }
  let env = 'production'
  if (hostname.indexOf('dev.') >= 0) {
    env = 'dev'
  }
  const config = envs[env]
  config.API_BASE = `${protocol}//api.${host}`
  return config
}

export default calculateConfig()
