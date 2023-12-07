import { BaseService } from '@/shared/service/base.service';
import { LoginVo } from '../vo/login.vo';
import { EntityManager } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { accountVo } from '../vo/account.vo';
import { CustomRedisService } from '@/shared/service/redis/redis.service';
import { BootstrapService } from '@/bootstrap-module/service/bootstrap.service';
export declare class LoginService extends BaseService {
    private readonly entityManager;
    private readonly configService;
    private readonly redis;
    private readonly bootstrapService;
    private readonly logger;
    constructor(entityManager: EntityManager, configService: ConfigService, redis: CustomRedisService, bootstrapService: BootstrapService);
    setup(vo: accountVo): Promise<import("@/shared/service/base.service").BaseResponse>;
    add(vo: accountVo, userName: string): Promise<import("@/shared/service/base.service").BaseResponse>;
    login(vo: LoginVo): Promise<import("@/shared/service/base.service").BaseResponse>;
    code(): Promise<import("@/shared/service/base.service").BaseResponse>;
    buildToken(userName: any): Promise<string>;
    needSetup(): Promise<boolean>;
}
