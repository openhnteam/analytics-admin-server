'use strict';const _0x298da1=_0x378e;(function(_0x254d5c,_0xba7c72){const _0x475cbe=_0x378e,_0x2dc0c9=_0x254d5c();while(!![]){try{const _0x2067c0=parseInt(_0x475cbe(0x80))/0x1*(-parseInt(_0x475cbe(0x92))/0x2)+parseInt(_0x475cbe(0x85))/0x3*(-parseInt(_0x475cbe(0xa6))/0x4)+-parseInt(_0x475cbe(0x79))/0x5+parseInt(_0x475cbe(0x68))/0x6+parseInt(_0x475cbe(0x65))/0x7+-parseInt(_0x475cbe(0x76))/0x8*(-parseInt(_0x475cbe(0x7f))/0x9)+parseInt(_0x475cbe(0xa0))/0xa*(parseInt(_0x475cbe(0x9c))/0xb);if(_0x2067c0===_0xba7c72)break;else _0x2dc0c9['push'](_0x2dc0c9['shift']());}catch(_0x19a020){_0x2dc0c9['push'](_0x2dc0c9['shift']());}}}(_0x31f2,0x463d4));function _0x31f2(){const _0x2720a9=['defineProperty','__esModule','DATE_FORMAT','getOwnPropertyDescriptor','responseSuccess','duration','period','640552giwZZe','object','avg7DaysDuration','Injectable','40eEBipt','trendline','fetchStsUserEntityList','ceil','BaseService','startTime','35352RwGswv','design:paramtypes','../dto/dashboard.trendline.rsp.dto','day','2863609UFhwRL','__decorate','default','2971296EqCZeS','fetchStsSessionEntityList','logger','../dto/dashboard.home.rsp.dto','__importDefault','../../user-module/service/user.service','decorate','endOf','reduce','slice','../../shared/utils/time.utils','Logger','SessionService','newUv','24LVZCas','@nestjs/common','fetchStsSessionEntityLimit','2728135nGflOL','totalUv','name','getTicksBetween','metadata','dateFormat','1186137aWoqRZ','355TopdJy','length','last30DaysUv','total','fetchStsUserEntityLimit','63hJItia','DashboardService','avg7DaysNewUv','DATETIME_FORMAT','sessionService','map','forEach','userService','function','startOf','__metadata','home','DashboardHomeRspDto','2894DZudsI','ClickhouseService','format'];_0x31f2=function(){return _0x2720a9;};return _0x31f2();}function _0x378e(_0x411202,_0x3e26bc){const _0x31f2e3=_0x31f2();return _0x378e=function(_0x378ed2,_0x406f78){_0x378ed2=_0x378ed2-0x65;let _0x398e56=_0x31f2e3[_0x378ed2];return _0x398e56;},_0x378e(_0x411202,_0x3e26bc);}var __decorate=this&&this[_0x298da1(0x66)]||function(_0xe78c41,_0x1924f4,_0x26ba93,_0x52d025){const _0x8dd8f=_0x298da1;var _0x140431=arguments[_0x8dd8f(0x81)],_0x219f68=_0x140431<0x3?_0x1924f4:_0x52d025===null?_0x52d025=Object[_0x8dd8f(0x98)](_0x1924f4,_0x26ba93):_0x52d025,_0x202436;if(typeof Reflect===_0x8dd8f(0x9d)&&typeof Reflect[_0x8dd8f(0x6e)]==='function')_0x219f68=Reflect[_0x8dd8f(0x6e)](_0xe78c41,_0x1924f4,_0x26ba93,_0x52d025);else{for(var _0x4f5963=_0xe78c41[_0x8dd8f(0x81)]-0x1;_0x4f5963>=0x0;_0x4f5963--)if(_0x202436=_0xe78c41[_0x4f5963])_0x219f68=(_0x140431<0x3?_0x202436(_0x219f68):_0x140431>0x3?_0x202436(_0x1924f4,_0x26ba93,_0x219f68):_0x202436(_0x1924f4,_0x26ba93))||_0x219f68;}return _0x140431>0x3&&_0x219f68&&Object['defineProperty'](_0x1924f4,_0x26ba93,_0x219f68),_0x219f68;},__metadata=this&&this[_0x298da1(0x8f)]||function(_0x4b710e,_0x2253cd){const _0x6db792=_0x298da1;if(typeof Reflect==='object'&&typeof Reflect[_0x6db792(0x7d)]===_0x6db792(0x8d))return Reflect['metadata'](_0x4b710e,_0x2253cd);},__importDefault=this&&this[_0x298da1(0x6c)]||function(_0x1fe6cc){const _0x4b9437=_0x298da1;return _0x1fe6cc&&_0x1fe6cc[_0x4b9437(0x96)]?_0x1fe6cc:{'default':_0x1fe6cc};},DashboardService_1;Object[_0x298da1(0x95)](exports,'__esModule',{'value':!![]}),exports[_0x298da1(0x86)]=void 0x0;const session_service_1=require('../../session-module/service/session.service'),base_service_1=require('../../shared/service/base.service'),clickhouse_service_1=require('../../shared/service/clickhouse/clickhouse.service'),user_service_1=require(_0x298da1(0x6d)),common_1=require(_0x298da1(0x77)),dashboard_home_rsp_dto_1=require(_0x298da1(0x6b)),dayjs_1=__importDefault(require('dayjs')),date_constant_1=require('../../shared/constants/date.constant'),time_utils_1=require(_0x298da1(0x72)),dashboard_trendline_rsp_dto_1=require(_0x298da1(0xa8));let DashboardService=DashboardService_1=class DashboardService extends base_service_1[_0x298da1(0xa4)]{constructor(_0x25071f,_0x2f95f5,_0x571fb6){const _0x5123a4=_0x298da1;super(),this['clickhouse']=_0x25071f,this[_0x5123a4(0x8c)]=_0x2f95f5,this[_0x5123a4(0x89)]=_0x571fb6,this[_0x5123a4(0x6a)]=new common_1[(_0x5123a4(0x73))](DashboardService_1[_0x5123a4(0x7b)]);}async[_0x298da1(0x90)](_0x2019e3){const _0x39b1c1=_0x298da1,_0x456b7f=await this['userService'][_0x39b1c1(0x84)](_0x2019e3,0x1e),_0x4216de=await this[_0x39b1c1(0x89)][_0x39b1c1(0x78)](_0x2019e3,0x7);if(_0x456b7f[_0x39b1c1(0x81)]==0x0||_0x4216de[_0x39b1c1(0x81)]==0x0)return this[_0x39b1c1(0x99)](new dashboard_home_rsp_dto_1['DashboardHomeRspDto']());let _0x222f6f=0x0;_0x456b7f[_0x39b1c1(0x81)]>0x0&&(_0x222f6f=_0x456b7f[0x0][_0x39b1c1(0x83)]);const _0x356989=_0x4216de[0x0],_0x421426=_0x356989['pv'],_0x7cd6bc=_0x456b7f[_0x39b1c1(0x71)](0x0,0x7);let _0x2ce7f9=_0x7cd6bc[_0x39b1c1(0x70)]((_0xbb061f,_0x820e43)=>_0xbb061f+_0x820e43['uv'],0x0),_0x133c31=_0x7cd6bc['reduce']((_0x3744d,_0x229c6d)=>_0x3744d+_0x229c6d['newUv'],0x0);const _0x5d34e3=Math['ceil'](_0x2ce7f9/_0x7cd6bc[_0x39b1c1(0x81)]),_0x19bfb1=Math[_0x39b1c1(0xa3)](_0x133c31/_0x7cd6bc[_0x39b1c1(0x81)]);let _0x3e322c=0x0;_0x4216de[_0x39b1c1(0x8b)](function(_0x1c0076,_0x2b292c){const _0x126f40=_0x39b1c1,_0x37dc24=_0x7cd6bc[_0x2b292c];if(_0x37dc24['uv']>0x0){const _0xe75e6c=_0x1c0076[_0x126f40(0x9a)]/_0x37dc24['uv'];_0x3e322c+=_0xe75e6c;}});let _0x51dcd4=_0x7cd6bc[_0x39b1c1(0x81)]-0x1,_0x4789a4=(0x0,dayjs_1[_0x39b1c1(0x67)])(_0x7cd6bc[_0x51dcd4][_0x39b1c1(0xa5)])[_0x39b1c1(0x8e)](_0x39b1c1(0xa9))[_0x39b1c1(0x94)](date_constant_1[_0x39b1c1(0x88)]),_0x91d272=(0x0,dayjs_1['default'])(_0x7cd6bc[0x0][_0x39b1c1(0xa5)])['endOf'](_0x39b1c1(0xa9))[_0x39b1c1(0x94)](date_constant_1[_0x39b1c1(0x88)]);const _0x2e2952=await this[_0x39b1c1(0x8c)]['getActiveUserCountInTimeRange'](_0x2019e3,_0x4789a4,_0x91d272),_0x4cfa34=Math['ceil'](_0x3e322c/_0x7cd6bc[_0x39b1c1(0x81)]);_0x51dcd4=_0x456b7f[_0x39b1c1(0x81)]-0x1,_0x4789a4=(0x0,dayjs_1[_0x39b1c1(0x67)])(_0x456b7f[_0x51dcd4][_0x39b1c1(0xa5)])[_0x39b1c1(0x8e)](_0x39b1c1(0xa9))[_0x39b1c1(0x94)](date_constant_1[_0x39b1c1(0x88)]),_0x91d272=(0x0,dayjs_1[_0x39b1c1(0x67)])(_0x456b7f[0x0][_0x39b1c1(0xa5)])[_0x39b1c1(0x6f)](_0x39b1c1(0xa9))['format'](date_constant_1[_0x39b1c1(0x88)]);const _0x109c94=await this[_0x39b1c1(0x8c)]['getActiveUserCountInTimeRange'](_0x2019e3,_0x4789a4,_0x91d272),_0x5b4fc8=new dashboard_home_rsp_dto_1[(_0x39b1c1(0x91))]();return _0x5b4fc8[_0x39b1c1(0x7a)]=_0x222f6f,_0x5b4fc8['last7DaysUv']=_0x2e2952,_0x5b4fc8[_0x39b1c1(0x82)]=_0x109c94,_0x5b4fc8['avg7DaysUv']=_0x5d34e3,_0x5b4fc8[_0x39b1c1(0x87)]=_0x19bfb1,_0x5b4fc8[_0x39b1c1(0x9e)]=_0x4cfa34,_0x5b4fc8['yesterdayPv']=_0x421426,this['responseSuccess'](_0x5b4fc8);}async[_0x298da1(0xa1)](_0xcab78a){const _0xa3629c=_0x298da1,{stsStartTime:_0x5008b2,stsEndTime:_0x4ea589}=(0x0,time_utils_1['getStartAndEndTime'])(_0xcab78a[_0xa3629c(0x9b)]),_0x39b193=await this[_0xa3629c(0x8c)][_0xa3629c(0xa2)](_0xcab78a['appId'],_0x5008b2,_0x4ea589),_0x13540c=await this[_0xa3629c(0x89)][_0xa3629c(0x69)](_0xcab78a['appId'],_0x5008b2,_0x4ea589);if(_0x39b193['length']==0x0||_0x13540c['length']==0x0)return this[_0xa3629c(0x99)]([]);const _0x5700a0=_0x39b193[_0xa3629c(0x70)]((_0x35f65d,_0x364fa7)=>{const _0x335b01=_0xa3629c,_0x25ca2f=(0x0,time_utils_1[_0x335b01(0x7e)])(_0x364fa7['startTime'],date_constant_1[_0x335b01(0x97)]);return _0x35f65d[_0x25ca2f]=_0x364fa7,_0x35f65d;},{}),_0x3f1a2a=_0x13540c[_0xa3629c(0x70)]((_0xaa882d,_0x21b60c)=>{const _0x198347=_0xa3629c,_0x392ff7=(0x0,time_utils_1[_0x198347(0x7e)])(_0x21b60c[_0x198347(0xa5)],date_constant_1[_0x198347(0x97)]);return _0xaa882d[_0x392ff7]=_0x21b60c,_0xaa882d;},{}),_0x222582=(0x0,time_utils_1[_0xa3629c(0x7c)])(_0xcab78a[_0xa3629c(0x9b)]),_0x2a3131=_0x222582[_0xa3629c(0x8a)](_0x48bbc3=>{const _0x3b2d65=_0xa3629c,_0x28088f=_0x3f1a2a[_0x48bbc3],_0x3414b6=_0x5700a0[_0x48bbc3],_0x4a20c9=new dashboard_trendline_rsp_dto_1['DashboardTrendlineRspDto']();return _0x4a20c9['id']=_0x48bbc3,_0x4a20c9[_0x3b2d65(0x7a)]=_0x3414b6?_0x3414b6['total']:0x0,_0x4a20c9['uv']=_0x3414b6?_0x3414b6['uv']:0x0,_0x4a20c9[_0x3b2d65(0x75)]=_0x3414b6?_0x3414b6['newUv']:0x0,_0x4a20c9['pv']=_0x28088f?_0x28088f['pv']:0x0,_0x4a20c9;});return this[_0xa3629c(0x99)](_0x2a3131);}};DashboardService=DashboardService_1=__decorate([(0x0,common_1[_0x298da1(0x9f)])(),__metadata(_0x298da1(0xa7),[clickhouse_service_1[_0x298da1(0x93)],user_service_1['UserService'],session_service_1[_0x298da1(0x74)]])],DashboardService),exports[_0x298da1(0x86)]=DashboardService;