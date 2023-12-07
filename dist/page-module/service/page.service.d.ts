import { StsTaskDto } from '@/shared/dto/sts.task.dto';
import { OnAppInit } from '@/shared/interface/app.init.interface';
import { DailyTaskScheduler } from '@/shared/interface/daily.interface';
import { BaseService } from '@/shared/service/base.service';
import { ClickhouseService } from '@/shared/service/clickhouse/clickhouse.service';
import { Dayjs } from 'dayjs';
import { EntityManager } from 'typeorm';
import { StsPageEntity } from '../entity/sts.page.entity';
import { PageSidSearchVo } from '../vo/page.sid.search.vo';
import { AdminPeriodVo } from '@/shared/vo/admin.period.vo';
export declare class PageService extends BaseService implements OnAppInit, DailyTaskScheduler {
    private readonly clickhouse;
    private readonly entityManager;
    private readonly logger;
    constructor(clickhouse: ClickhouseService, entityManager: EntityManager);
    sidSearch(vo: PageSidSearchVo): Promise<import("@/shared/service/base.service").BaseResponse>;
    duration(vo: AdminPeriodVo): Promise<import("@/shared/service/base.service").BaseResponse>;
    startDailyStatistics(appId: string, date: Dayjs, tasks: StsTaskDto[]): Promise<void>;
    buildStsPageEntity(appId: string, task: StsTaskDto): Promise<StsPageEntity[]>;
    clearDailyData(appId: string, date: Dayjs, tasks: StsTaskDto[]): Promise<void>;
    onAppInit(appId: string): Promise<boolean>;
}
