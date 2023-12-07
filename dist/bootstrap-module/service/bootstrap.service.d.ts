import { EntityManager } from 'typeorm';
import { BaseService } from '@/shared/service/base.service';
import { ClickhouseService } from '@/shared/service/clickhouse/clickhouse.service';
import { MetricsService } from '@/metrics-module/service/metrics.service';
export declare class BootstrapService extends BaseService {
    private readonly entityManager;
    private readonly clickhouse;
    private readonly metricsService;
    private readonly logger;
    constructor(entityManager: EntityManager, clickhouse: ClickhouseService, metricsService: MetricsService);
    bootstrap(): Promise<void>;
}
