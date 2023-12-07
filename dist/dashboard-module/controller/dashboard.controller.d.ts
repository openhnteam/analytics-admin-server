import { DashboardService } from '../service/dashboard.service';
import { AdminBaseVo } from '@/shared/vo/admin.base.vo';
import { AdminPeriodVo } from '@/shared/vo/admin.period.vo';
export declare class DashboardController {
    readonly dashboardService: DashboardService;
    constructor(dashboardService: DashboardService);
    home(vo: AdminBaseVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    trendline(vo: AdminPeriodVo): Promise<import("../../shared/service/base.service").BaseResponse>;
}
