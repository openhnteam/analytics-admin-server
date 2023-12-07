import { LoginService } from '@/login-module/service/login.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
export declare class TokenGuard implements CanActivate {
    private reflector;
    private configService;
    private loginService;
    constructor(reflector: Reflector, configService: ConfigService, loginService: LoginService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
