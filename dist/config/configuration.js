"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_ts_1 = require("deepmerge-ts");
const config_default_1 = __importDefault(require("./config.default"));
const config_development_1 = __importDefault(require("./config.development"));
const config_test_1 = __importDefault(require("./config.test"));
const config_prd_1 = __importDefault(require("./config.prd"));
const config_docker_1 = __importDefault(require("./config.docker"));
const configs = {
    development: config_development_1.default,
    test: config_test_1.default,
    prod: config_prd_1.default,
    docker: config_docker_1.default
};
const env = process.env.NODE_ENV || "development";
console.log("NODE_ENV", env);
exports.default = () => {
    const envConfig = configs[env];
    const result = (0, deepmerge_ts_1.deepmerge)(config_default_1.default, envConfig);
    return result;
};
//# sourceMappingURL=configuration.js.map