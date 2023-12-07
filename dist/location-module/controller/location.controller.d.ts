import { LocationService } from '../service/location.service';
import { LocationListVo } from '../vo/location.list.vo';
export declare class LocationController {
    readonly locationService: LocationService;
    constructor(locationService: LocationService);
    list(vo: LocationListVo): Promise<import("../../shared/service/base.service").BaseResponse>;
}
