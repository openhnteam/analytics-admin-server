import { NodeClickHouseClientConfigOptions } from "@clickhouse/client/dist/client";
export declare class ClickhouseService {
    private options;
    private client;
    private logger;
    constructor(options: NodeClickHouseClientConfigOptions);
    command(query: string): Promise<boolean>;
    query(query: string): Promise<any[]>;
    singleQuery(query: string): Promise<any>;
    insert<T>(table: string, data: T[]): Promise<{
        success: boolean;
        error?: string;
    }>;
}
