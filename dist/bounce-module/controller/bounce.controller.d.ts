import { BounceService } from '../service/bounce.service';
import { AdminPeriodVo } from '@/shared/vo/admin.period.vo';
export declare class BounceController {
    readonly bounceService: BounceService;
    constructor(bounceService: BounceService);
    list(vo: AdminPeriodVo): Promise<import("../../shared/service/base.service").BaseResponse>;
}
