import { AdminPeriodVo } from "@/shared/vo/admin.period.vo";
import { OlapFilterVo } from "@/shared/vo/olap.filter.vo";
export declare class EventOlapFilterVo extends AdminPeriodVo {
    eventId: string;
    filterList: OlapFilterVo[];
}
