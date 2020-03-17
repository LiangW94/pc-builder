const { isDev, isProd, isTest } = require('../utils/env');

let MYSQL_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'pc_builder_dev'
};

let REDIS_CONFIG = {
  port: 6379,
  host: '127.0.0.1'
};

if (isDev || isTest) {
  MYSQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'pc_builder_dev'
  };

  REDIS_CONFIG = {
    port: 6379,
    host: '127.0.0.1'
  };
}

if (isProd) {
  MYSQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'pc_builder_dev'
  };

  REDIS_CONFIG = {
    port: 6379,
    host: '127.0.0.1'
  };
}

module.exports = {
  MYSQL_CONFIG,
  REDIS_CONFIG
};
