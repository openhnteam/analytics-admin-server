import { AdminBaseVo } from "@/shared/vo/admin.base.vo";
export declare class EventInfoEditVo {
    eventId: string;
    eventName: string;
    eventDes: string;
    eventStatus: number;
}
export declare class BatchEventInfoEditVo extends AdminBaseVo {
    list: EventInfoEditVo[];
}
