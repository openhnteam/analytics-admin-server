import { Dayjs } from "dayjs";
import { DateUnit } from "../constants/date.constant";
export declare class StsTaskDto {
    appId: string;
    year: number;
    idx: number;
    type: DateUnit;
    startTime: Dayjs;
    endTime: Dayjs;
    startTimeString: string;
    endTimeString: string;
}
