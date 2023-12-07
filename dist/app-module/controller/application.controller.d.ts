import { ApplicationService } from '../service/application.service';
import { ApplicationCreateVo } from '../vo/application.create.vo';
import { ApplicationEditVo } from '../vo/application.edit.vo';
import { AdminBaseVo } from '@/shared/vo/admin.base.vo';
export declare class ApplicationController {
    readonly applicationService: ApplicationService;
    constructor(applicationService: ApplicationService);
    create(vo: ApplicationCreateVo): Promise<any>;
    del(vo: AdminBaseVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    edit(vo: ApplicationEditVo): Promise<any>;
    list(): Promise<any>;
    detail(vo: AdminBaseVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    tz(): Promise<{
        tz: string;
        now: string;
    }>;
}
