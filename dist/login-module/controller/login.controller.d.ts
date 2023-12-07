import { LoginService } from '../service/login.service';
import { LoginVo } from '../vo/login.vo';
import { Request } from 'express';
import { accountVo } from '../vo/account.vo';
export declare class LoginController {
    readonly loginService: LoginService;
    constructor(loginService: LoginService);
    setup(vo: accountVo, req: Request): Promise<import("../../shared/service/base.service").BaseResponse>;
    add(vo: accountVo, req: Request): Promise<import("../../shared/service/base.service").BaseResponse>;
    login(vo: LoginVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    code(): Promise<import("../../shared/service/base.service").BaseResponse>;
}
