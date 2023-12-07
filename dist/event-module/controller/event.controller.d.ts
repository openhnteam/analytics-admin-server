/// <reference types="node" />
import { StreamableFile } from '@nestjs/common';
import { EventService } from '../service/event.service';
import { BatchEventInfoEditVo } from '../vo/event.info.edit.vo';
import { BatchEventSegInfoEditVo } from '../vo/event.seg.info.edit.vo';
import { EventInfoListVo } from '../vo/event.info.list.vo';
import { EventSegInfoListVo } from '../vo/event.seg.info.list.vo';
import { EventStsVo } from '../vo/event.sts.vo';
import { EventSegStsVo } from '../vo/event.seg.sts.vo';
import { EventSegValueStsVo } from '../vo/event.seg.value.sts.vo';
export declare class EventController {
    readonly eventService: EventService;
    constructor(eventService: EventService);
    infoList(vo: EventInfoListVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    segInfoList(vo: EventSegInfoListVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    editEventInfo(vo: BatchEventInfoEditVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    segEditEvent(vo: BatchEventSegInfoEditVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    eventStsList(vo: EventStsVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    eventSegStsList(res: any, vo: EventSegStsVo): Promise<Buffer | import("../../shared/service/base.service").BaseResponse | StreamableFile>;
    eventSegValueStsList(vo: EventSegValueStsVo): Promise<import("../../shared/service/base.service").BaseResponse>;
}
