import { PageService } from '../service/page.service';
import { PageSidSearchVo } from '../vo/page.sid.search.vo';
import { AdminPeriodVo } from '@/shared/vo/admin.period.vo';
export declare class PageController {
    readonly pageService: PageService;
    constructor(pageService: PageService);
    sidSearch(vo: PageSidSearchVo): Promise<import("../../shared/service/base.service").BaseResponse>;
    duration(vo: AdminPeriodVo): Promise<import("../../shared/service/base.service").BaseResponse>;
}
