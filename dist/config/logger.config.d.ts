/// <reference types="node/http" />
import { Options } from "pino-http";
import { ConfigService } from "@nestjs/config";
export declare function getLogConfig(configService: ConfigService): Promise<{
    pinoHttp: Options<import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>>;
}>;
