module.exports = {
  apps: [{
    name: 'fighter',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    instances: '1',
    exec_mode: 'fork',
    watch: false,
    env: {
      PORT: 3000,
      NODE_ENV: 'production'
    }
  }]
}
