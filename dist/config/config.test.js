"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mode: "test",
    mysql: {
        type: 'mysql',
        host: '',
        port: 3306,
        driver: 'mysql2',
        username: '',
        password: '',
        timezone: '+08:00',
        database: '',
        charset: 'UTF8_GENERAL_CI'
    },
    clickhouse: {
        host: "",
        database: "",
        username: "",
        password: "",
    },
    redis: {
        host: '',
        port: 6379,
        password: '',
        db: 0,
        keyPrefix: 'aly_'
    },
    log: {
        level: "info",
        filepath: "logs/analytics.log",
    },
    swagger: {
        enable: true,
        serverHost: ''
    },
    jwt: {
        secret: ''
    }
};
//# sourceMappingURL=config.test.js.map