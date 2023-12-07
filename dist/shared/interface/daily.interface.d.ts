import { Dayjs } from "dayjs";
import { StsTaskDto } from "../dto/sts.task.dto";
export interface DailyTaskScheduler {
    startDailyStatistics(appId: string, date: Dayjs, tasks: StsTaskDto[]): void;
    clearDailyData(appId: string, date: Dayjs, tasks: StsTaskDto[]): void;
}
