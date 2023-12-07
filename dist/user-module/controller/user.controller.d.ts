import { AdminPeriodVo } from "@/shared/vo/admin.period.vo";
import { UserService } from "../service/user.service";
export declare class UserController {
    readonly userService: UserService;
    constructor(userService: UserService);
    list(vo: AdminPeriodVo): Promise<import("../../shared/service/base.service").BaseResponse>;
}
