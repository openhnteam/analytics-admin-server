import { MetricsService } from '../service/metrics.service';
import { MetricsGroupVo } from '../vo/metrics.group.vo';
import { MetricsTrendlineVo } from '../vo/metrics.trendline.vo';
export declare class MeteicsController {
    readonly metricsService: MetricsService;
    constructor(metricsService: MetricsService);
    fetch(vo: MetricsGroupVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    trendline(vo: MetricsTrendlineVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    setup(): Promise<import("../../shared/service/base.service").BaseResponse>;
}
