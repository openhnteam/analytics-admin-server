import { StsTaskDto } from '@/shared/dto/sts.task.dto';
import { OnAppInit } from '@/shared/interface/app.init.interface';
import { DailyTaskScheduler } from '@/shared/interface/daily.interface';
import { BaseService } from '@/shared/service/base.service';
import { ClickhouseService } from '@/shared/service/clickhouse/clickhouse.service';
import { Dayjs } from 'dayjs';
import { EntityManager } from 'typeorm';
import { StsLocationEntity } from '../entity/sts.loaction.entity';
import { LocationListVo } from '../vo/location.list.vo';
export declare class LocationService extends BaseService implements OnAppInit, DailyTaskScheduler {
    private readonly clickhouse;
    private readonly entityManager;
    private readonly logger;
    constructor(clickhouse: ClickhouseService, entityManager: EntityManager);
    list(vo: LocationListVo): Promise<import("@/shared/service/base.service").BaseResponse>;
    startDailyStatistics(appId: string, date: Dayjs, tasks: StsTaskDto[]): Promise<void>;
    buildStsLocationEntityList(appId: string, task: StsTaskDto, country?: string, prov?: string): Promise<StsLocationEntity[]>;
    clearDailyData(appId: string, date: Dayjs, tasks: StsTaskDto[]): Promise<void>;
    onAppInit(appId: string): Promise<boolean>;
}
