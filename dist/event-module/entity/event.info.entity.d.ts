import { BaseEntity } from 'typeorm';
export declare class EventInfoEntity extends BaseEntity {
    id: string;
    appId: string;
    eventId: string;
    eventName: string;
    eventDes: string;
    eventStatus: number;
    createTime: Date;
    updateTime: Date;
    del: number;
}
