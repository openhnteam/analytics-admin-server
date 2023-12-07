import { ConfigType, Dayjs } from 'dayjs';
import { DateUnit } from '../constants/date.constant';
import { StsTaskDto } from '../dto/sts.task.dto';
export declare function sleep(ms: any): Promise<unknown>;
export declare function appTimeZone(): string;
export declare function curTs(): number;
export declare function dateFormat(date: ConfigType, format: string): string;
export declare function isTodayWithTs(timestamp: number | string): boolean;
export declare function isTodayWithDate(date: string): boolean;
export declare function isLastDayOfQuarter(date: Dayjs): boolean;
export declare function isLastDayOfMonth(date: Dayjs): boolean;
export declare function isLastDayOfIsoWeekday(date: Dayjs): boolean;
export declare function quarterIndex(date: Dayjs): number;
export declare function monthIndex(date: Dayjs): number;
export declare function isoWeekIndex(date: Dayjs): number;
export declare function isoWeekday(date: Dayjs): number;
export declare function dayOfMonthIndex(date: Dayjs): number;
export declare function dayOfYearIndex(date: Dayjs): number;
export declare function getStartOfUnit(unit?: DateUnit): string;
export declare function buildStsTask(date: Dayjs, unit: DateUnit): StsTaskDto;
export declare function preprocessTimeRange(startTs: number, endTs: number, unit?: DateUnit): {
    startTime: string;
    endTime: string;
    stsStartTime: string;
    stsEndTime: string;
};
export declare function timeFormatToDisplay(millisecond: number): string;
export declare function getStartAndEndTime(period: string, unit?: DateUnit): {
    startTime: string;
    endTime: string;
    stsStartTime: string;
    stsEndTime: string;
};
export declare function getTicksBetween(period: string): string[];
export declare function getPastNDaysTimeRange(n: number): {
    startTime: string;
    endTime: string;
};
