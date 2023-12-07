"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mode: "development",
    mysql: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        driver: 'mysql2',
        username: 'root',
        password: 'hello.openhn666',
        timezone: '+08:00',
        database: 'analytics',
        charset: 'UTF8_GENERAL_CI'
    },
    clickhouse: {
        host: "http://localhost:8123",
        database: "analytics",
        username: "root",
        password: "hello.openhn666",
    },
    redis: {
        host: 'localhost',
        port: 6379,
        password: 'hello.openhn666',
        db: 0,
        keyPrefix: 'aly_'
    },
    log: {
        level: "info",
        filepath: "logs/analytics.log",
    },
    swagger: {
        enable: true,
        serverHost: 'http://localhost:8083'
    },
    jwt: {
        secret: '56+#150d9@!'
    }
};
//# sourceMappingURL=config.development.js.map