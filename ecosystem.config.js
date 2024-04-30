module.exports = {
    apps: [
        {
        name: 'bubble-web',
        script: 'next', // 使用 npm 作为脚本执行器
        args: 'start -p 80',
        env_production: {
            NODE_ENV: 'prod'
        }
    }
    ]
};