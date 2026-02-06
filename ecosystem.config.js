module.exports = {
  apps: [
    {
      name: 'longevity-club',
      script: 'npm',
      args: 'run dev',
      cwd: '/Users/cyclerss/Downloads/CLC-0502',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
};
