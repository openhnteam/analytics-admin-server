import { AdminBaseVo } from "@/shared/vo/admin.base.vo";
export declare class EventSegInfoEditVo {
    segId: string;
    segName: string;
    segStatus: number;
}
export declare class BatchEventSegInfoEditVo extends AdminBaseVo {
    eventId: string;
    list: EventSegInfoEditVo[];
}
