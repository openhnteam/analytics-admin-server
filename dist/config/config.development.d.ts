declare const _default: {
    mode: string;
    mysql: {
        type: string;
        host: string;
        port: number;
        driver: string;
        username: string;
        password: string;
        timezone: string;
        database: string;
        charset: string;
    };
    clickhouse: {
        host: string;
        database: string;
        username: string;
        password: string;
    };
    redis: {
        host: string;
        port: number;
        password: string;
        db: number;
        keyPrefix: string;
    };
    log: {
        level: string;
        filepath: string;
    };
    swagger: {
        enable: boolean;
        serverHost: string;
    };
    jwt: {
        secret: string;
    };
};
export default _default;
