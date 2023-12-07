import { SessionService } from "../service/session.service";
import { AdminPeriodVo } from "@/shared/vo/admin.period.vo";
import { AdminUnitVo } from "@/shared/vo/admin.unit.vo";
export declare class SessionController {
    readonly sessionService: SessionService;
    constructor(sessionService: SessionService);
    duration(vo: AdminPeriodVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    list(vo: AdminPeriodVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    frequency(vo: AdminUnitVo): Promise<import("../../shared/service/base.service").BaseResponse>;
}
