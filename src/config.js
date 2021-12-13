const os = require('os');

const config = {
  remote: '',
  port: process.env.NODE_ENV === 'production' ? '' : '8080',
  hostUI: process.env.NODE_ENV === 'production' ? '' : 'http://localhost',
  portUI: process.env.NODE_ENV === 'production' ? '' : '3000',
  portUIProd: process.env.NODE_ENV === 'production' ? '/#' : ':3000',
  email: {
    from: 'xmtaskbot@gmail.com',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'xmtaskbot@gmail.com',
      pass: 'xmtaskbot13_',
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
};

config.host =
  process.env.NODE_ENV === 'production' ? config.remote : 'http://localhost';
config.apiUrl = `${config.host}${config.port ? `${config.port}` : ``}/api`;
config.uiUrl = `${config.hostUI}${config.portUI ? `:${config.portUI}` : ``}/#`;
config.backUrl = `${config.hostUI}${config.portUI ? `:${config.portUI}` : ``}`;

module.exports = config;
