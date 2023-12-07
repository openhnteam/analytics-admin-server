import { ApplicationEntity } from '@/app-module/entity/application.entity';
import { ApplicationService } from '@/app-module/service/application.service';
import { BounceService } from '@/bounce-module/service/bounce.service';
import { EventService } from '@/event-module/service/event.service';
import { LocationService } from '@/location-module/service/location.service';
import { MetricsService } from '@/metrics-module/service/metrics.service';
import { PageService } from '@/page-module/service/page.service';
import { SessionService } from '@/session-module/service/session.service';
import { BaseService } from '@/shared/service/base.service';
import { CustomRedisService } from '@/shared/service/redis/redis.service';
import { UserService } from '@/user-module/service/user.service';
import { EntityManager } from 'typeorm';
import { Dayjs } from 'dayjs';
import { DailyTaskScheduler } from '@/shared/interface/daily.interface';
import { StsTaskDto } from '@/shared/dto/sts.task.dto';
import { ClickhouseService } from '@/shared/service/clickhouse/clickhouse.service';
export declare class JobService extends BaseService {
    private readonly entityManager;
    private readonly clickhouse;
    private readonly redis;
    private readonly applicationService;
    private readonly sessionService;
    private readonly userService;
    private readonly metricsService;
    private readonly eventService;
    private readonly pageService;
    private readonly bounceService;
    private readonly locationService;
    private readonly logger;
    private readonly schedulerList;
    constructor(entityManager: EntityManager, clickhouse: ClickhouseService, redis: CustomRedisService, applicationService: ApplicationService, sessionService: SessionService, userService: UserService, metricsService: MetricsService, eventService: EventService, pageService: PageService, bounceService: BounceService, locationService: LocationService);
    start(): Promise<any>;
    mergeCkSession(): Promise<void>;
    daily(): Promise<void>;
    clearDailyData(app: ApplicationEntity, date: Dayjs): Promise<void>;
    startDailyStatistics(app: ApplicationEntity, date: Dayjs): Promise<string>;
    startDailyStatisticsWithTryCatch(scheduler: DailyTaskScheduler, appId: string, date: Dayjs, taskDtos: StsTaskDto[]): Promise<void>;
    getScheduledTasksForStatistics(date: Dayjs): StsTaskDto[];
    latestTime(app: ApplicationEntity): Promise<Dayjs>;
}