import { SessionService } from '@/session-module/service/session.service';
import { BaseService } from '@/shared/service/base.service';
import { ClickhouseService } from '@/shared/service/clickhouse/clickhouse.service';
import { UserService } from '@/user-module/service/user.service';
import { AdminPeriodVo } from '@/shared/vo/admin.period.vo';
export declare class DashboardService extends BaseService {
    private readonly clickhouse;
    private readonly userService;
    private readonly sessionService;
    private readonly logger;
    constructor(clickhouse: ClickhouseService, userService: UserService, sessionService: SessionService);
    home(appId: string): Promise<import("@/shared/service/base.service").BaseResponse>;
    trendline(vo: AdminPeriodVo): Promise<import("@/shared/service/base.service").BaseResponse>;
}
