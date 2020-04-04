module.exports = {
  apps: [
    {
      name: 'pc-builder-api',
      script: './bin/www.js',
      watch: true,
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      ignore_watch: ['node_modules', 'logs'],
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      env: {
        PORT: 8001,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 8001,
        NODE_ENV: 'production',
      },
    },
  ],
};
