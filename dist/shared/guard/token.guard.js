'use strict';const _0x5ceaa6=_0x4941;(function(_0x6c05ca,_0x4c4fe0){const _0x4bf1d5=_0x4941,_0x465243=_0x6c05ca();while(!![]){try{const _0x254345=-parseInt(_0x4bf1d5(0xaf))/0x1+parseInt(_0x4bf1d5(0x9c))/0x2*(parseInt(_0x4bf1d5(0xa9))/0x3)+-parseInt(_0x4bf1d5(0xa7))/0x4*(-parseInt(_0x4bf1d5(0x92))/0x5)+parseInt(_0x4bf1d5(0x93))/0x6*(-parseInt(_0x4bf1d5(0xae))/0x7)+-parseInt(_0x4bf1d5(0x89))/0x8+parseInt(_0x4bf1d5(0x8b))/0x9*(-parseInt(_0x4bf1d5(0x88))/0xa)+parseInt(_0x4bf1d5(0xa4))/0xb;if(_0x254345===_0x4c4fe0)break;else _0x465243['push'](_0x465243['shift']());}catch(_0x5e422b){_0x465243['push'](_0x465243['shift']());}}}(_0x17ff,0xd49ff));var __decorate=this&&this[_0x5ceaa6(0xa2)]||function(_0x492e6b,_0x50014e,_0x44b171,_0xed3dff){const _0xbd5b88=_0x5ceaa6;var _0x50294b=arguments[_0xbd5b88(0xb5)],_0xd476c3=_0x50294b<0x3?_0x50014e:_0xed3dff===null?_0xed3dff=Object[_0xbd5b88(0x9e)](_0x50014e,_0x44b171):_0xed3dff,_0x71f8ae;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0xbd5b88(0xa1))_0xd476c3=Reflect[_0xbd5b88(0xac)](_0x492e6b,_0x50014e,_0x44b171,_0xed3dff);else{for(var _0x116aba=_0x492e6b[_0xbd5b88(0xb5)]-0x1;_0x116aba>=0x0;_0x116aba--)if(_0x71f8ae=_0x492e6b[_0x116aba])_0xd476c3=(_0x50294b<0x3?_0x71f8ae(_0xd476c3):_0x50294b>0x3?_0x71f8ae(_0x50014e,_0x44b171,_0xd476c3):_0x71f8ae(_0x50014e,_0x44b171))||_0xd476c3;}return _0x50294b>0x3&&_0xd476c3&&Object[_0xbd5b88(0xa0)](_0x50014e,_0x44b171,_0xd476c3),_0xd476c3;},__metadata=this&&this[_0x5ceaa6(0x94)]||function(_0x1373d4,_0x5f2d93){const _0x38cd14=_0x5ceaa6;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x38cd14(0xa1))return Reflect[_0x38cd14(0x9a)](_0x1373d4,_0x5f2d93);},__importDefault=this&&this[_0x5ceaa6(0x8e)]||function(_0x5b9989){return _0x5b9989&&_0x5b9989['__esModule']?_0x5b9989:{'default':_0x5b9989};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['TokenGuard']=void 0x0;const login_service_1=require('../../login-module/service/login.service'),common_1=require(_0x5ceaa6(0x8c)),core_1=require(_0x5ceaa6(0x97)),config_1=require(_0x5ceaa6(0x99)),jsonwebtoken_1=__importDefault(require('jsonwebtoken')),obj_utils_1=require('../utils/obj.utils');function _0x4941(_0x125480,_0x49eccd){const _0x17ff5a=_0x17ff();return _0x4941=function(_0x49417e,_0x1f71a1){_0x49417e=_0x49417e-0x87;let _0x352880=_0x17ff5a[_0x49417e];return _0x352880;},_0x4941(_0x125480,_0x49eccd);}let TokenGuard=class TokenGuard{constructor(_0x2da1cd,_0x6ee13c,_0x1bde46){const _0x2f5cae=_0x5ceaa6;this[_0x2f5cae(0x9b)]=_0x2da1cd,this[_0x2f5cae(0xb0)]=_0x6ee13c,this['loginService']=_0x1bde46;}async['canActivate'](_0x2db187){const _0x55f4b9=_0x5ceaa6,_0x455d47=process[_0x55f4b9(0xa3)][_0x55f4b9(0x98)];if(!(0x0,obj_utils_1[_0x55f4b9(0x90)])(_0x455d47))return!![];const _0x31d430=_0x2db187[_0x55f4b9(0xa6)]()[_0x55f4b9(0x91)](),_0x5d208e=[_0x55f4b9(0xb2)];if(await this[_0x55f4b9(0x87)]['needSetup']()&&!_0x5d208e[_0x55f4b9(0x8a)](_0x31d430[_0x55f4b9(0x8d)]))return![];const _0x2d836a=['/account/setup',_0x55f4b9(0xb6),_0x55f4b9(0xb7)];if(_0x2d836a[_0x55f4b9(0x8a)](_0x31d430[_0x55f4b9(0x8d)]))return!![];const _0x51a710=_0x31d430[_0x55f4b9(0x95)][_0x55f4b9(0x9d)];if((0x0,obj_utils_1[_0x55f4b9(0x90)])(_0x51a710))throw new common_1[(_0x55f4b9(0xaa))]();const _0x4026ea=_0x51a710[_0x55f4b9(0x9f)](_0x55f4b9(0xad),'');try{const _0x195e17=this[_0x55f4b9(0xb0)][_0x55f4b9(0xa5)](_0x55f4b9(0xa8)),_0xf89e51=jsonwebtoken_1[_0x55f4b9(0xb4)]['verify'](_0x4026ea,_0x195e17);_0x31d430[_0x55f4b9(0xb1)]=_0xf89e51['userName'];}catch(_0x127b6b){throw new common_1[(_0x55f4b9(0xaa))]();}return!![];}};function _0x17ff(){const _0x1c5196=['@nestjs/config','metadata','reflector','98DiBVHZ','authorization','getOwnPropertyDescriptor','replace','defineProperty','function','__decorate','env','37145053GUNQxW','get','switchToHttp','4riJxdP','jwt.secret','75609GxBsnh','UnauthorizedException','Injectable','decorate','Bearer\x20','7bQqHBb','1122269pRarMX','configService','userName','/account/setup','design:paramtypes','default','length','/account/code','/account/login','loginService','10940VOGFds','7074320CPvJeX','includes','10539uSOasm','@nestjs/common','url','__importDefault','TokenGuard','isEmpty','getRequest','3795620JUWPph','7274100undTZA','__metadata','headers','Reflector','@nestjs/core','APP_PREVIEW'];_0x17ff=function(){return _0x1c5196;};return _0x17ff();}TokenGuard=__decorate([(0x0,common_1[_0x5ceaa6(0xab)])(),__metadata(_0x5ceaa6(0xb3),[core_1[_0x5ceaa6(0x96)],config_1['ConfigService'],login_service_1['LoginService']])],TokenGuard),exports[_0x5ceaa6(0x8f)]=TokenGuard;