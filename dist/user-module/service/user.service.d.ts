import { StsTaskDto } from '@/shared/dto/sts.task.dto';
import { OnAppInit } from '@/shared/interface/app.init.interface';
import { DailyTaskScheduler } from '@/shared/interface/daily.interface';
import { BaseService } from '@/shared/service/base.service';
import { ClickhouseService } from '@/shared/service/clickhouse/clickhouse.service';
import { Dayjs } from 'dayjs';
import { EntityManager } from 'typeorm';
import { StsUserEntity } from '../entity/sts.user.entity';
import { AdminPeriodVo } from '@/shared/vo/admin.period.vo';
export declare class UserService extends BaseService implements OnAppInit, DailyTaskScheduler {
    private readonly clickhouse;
    private readonly entityManager;
    private readonly logger;
    constructor(clickhouse: ClickhouseService, entityManager: EntityManager);
    list(vo: AdminPeriodVo): Promise<import("@/shared/service/base.service").BaseResponse>;
    getActiveUserCountInTimeRange(appId: string, startTime: string, endTime: string): Promise<number>;
    fetchNewUserCount(appId: string, startTime: string, endTime: string): Promise<number>;
    fetchStsUserEntityList(appId: string, startTime: string, endTime: string): Promise<StsUserEntity[]>;
    fetchStsUserEntityLimit(appId: string, limit: number): Promise<StsUserEntity[]>;
    startDailyStatistics(appId: string, date: Dayjs, tasks: StsTaskDto[]): Promise<void>;
    clearDailyData(appId: string, date: Dayjs, tasks: StsTaskDto[]): Promise<void>;
    onAppInit(appId: string): Promise<boolean>;
}
