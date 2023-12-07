import { RedisService } from '@liaoliaots/nestjs-redis';
import { RedisKey, RedisValue } from 'ioredis';
export declare class CustomRedisService {
    private readonly redisService;
    private redisClient;
    constructor(redisService: RedisService);
    set(key: RedisKey, value: RedisValue): Promise<"OK">;
    get(key: RedisKey): Promise<string | null>;
    exist(key: RedisKey): Promise<boolean>;
    setWithExS(key: RedisKey, value: RedisValue, seconds: number): Promise<"OK">;
    del(key: RedisKey): Promise<boolean>;
    mdel(keys: string[]): Promise<number>;
    getLock(key: RedisKey, expire?: number): Promise<boolean>;
    mget(keys: string[]): Promise<(string | null)[]>;
    mset(map: Map<string, string | number>): Promise<string>;
    bitcount(key: string): Promise<number>;
    setbit(key: string, offset: number): Promise<number>;
    bitop(operation: string, destkey: string, keys: string[]): Promise<any>;
}
