'use strict';const _0x193f7a=_0x4867;(function(_0x41f993,_0x50a74c){const _0x2a4e72=_0x4867,_0x5519a6=_0x41f993();while(!![]){try{const _0x1de4c6=parseInt(_0x2a4e72(0x16e))/0x1+parseInt(_0x2a4e72(0x15a))/0x2+parseInt(_0x2a4e72(0x16d))/0x3+-parseInt(_0x2a4e72(0x177))/0x4*(-parseInt(_0x2a4e72(0x176))/0x5)+parseInt(_0x2a4e72(0x16b))/0x6*(parseInt(_0x2a4e72(0x14f))/0x7)+parseInt(_0x2a4e72(0x167))/0x8*(parseInt(_0x2a4e72(0x170))/0x9)+-parseInt(_0x2a4e72(0x17a))/0xa;if(_0x1de4c6===_0x50a74c)break;else _0x5519a6['push'](_0x5519a6['shift']());}catch(_0x28cf08){_0x5519a6['push'](_0x5519a6['shift']());}}}(_0x279e,0x377e5));Object['defineProperty'](exports,_0x193f7a(0x157),{'value':!![]});function _0x4867(_0x34339d,_0x34afbc){const _0x279efb=_0x279e();return _0x4867=function(_0x486718,_0x4b99fd){_0x486718=_0x486718-0x14f;let _0x16cade=_0x279efb[_0x486718];return _0x16cade;},_0x4867(_0x34339d,_0x34afbc);}const core_1=require('@nestjs/core'),app_module_1=require('./app.module'),nestjs_pino_1=require('nestjs-pino'),config_1=require(_0x193f7a(0x175)),swagger_1=require(_0x193f7a(0x15c)),global_exception_filter_1=require(_0x193f7a(0x178)),http_exception_filter_1=require('./shared/filter/http.exception.filter'),biz_exception_filter_1=require(_0x193f7a(0x161)),traceid_middleware_1=require(_0x193f7a(0x16f));async function bootstrap(){const _0x5e600c=_0x193f7a,_0x177fcb=await core_1['NestFactory'][_0x5e600c(0x17b)](app_module_1['AppModule'],{'bufferLogs':!![],'rawBody':!![]});_0x177fcb[_0x5e600c(0x165)](new global_exception_filter_1[(_0x5e600c(0x15f))](),new http_exception_filter_1[(_0x5e600c(0x166))](),new biz_exception_filter_1['BizExceptionFilter']()),_0x177fcb['use'](traceid_middleware_1[_0x5e600c(0x179)]),_0x177fcb[_0x5e600c(0x172)](_0x177fcb[_0x5e600c(0x154)](nestjs_pino_1['Logger']));const _0x87a5b1=_0x177fcb[_0x5e600c(0x154)](config_1[_0x5e600c(0x16a)]);if(_0x87a5b1[_0x5e600c(0x154)](_0x5e600c(0x162))){const _0x4a39ae=_0x87a5b1[_0x5e600c(0x154)]('swagger'),_0x2c98d8=new swagger_1[(_0x5e600c(0x158))]()['setTitle'](_0x4a39ae[_0x5e600c(0x164)])[_0x5e600c(0x153)](_0x4a39ae[_0x5e600c(0x169)])[_0x5e600c(0x15b)](_0x4a39ae[_0x5e600c(0x164)],_0x4a39ae['site'],_0x4a39ae[_0x5e600c(0x150)])[_0x5e600c(0x160)](_0x4a39ae['version']||_0x5e600c(0x16c))[_0x5e600c(0x15e)](_0x4a39ae[_0x5e600c(0x171)])[_0x5e600c(0x168)](_0x4a39ae[_0x5e600c(0x155)])['build'](),_0x52372d=swagger_1['SwaggerModule'][_0x5e600c(0x173)](_0x177fcb,_0x2c98d8),_0x2a8b8f={'customfavIcon':_0x5e600c(0x15d),'useGlobalPrefix':!![]};swagger_1['SwaggerModule'][_0x5e600c(0x151)](_0x5e600c(0x174),_0x177fcb,_0x52372d,_0x2a8b8f);}await _0x177fcb[_0x5e600c(0x152)](_0x87a5b1[_0x5e600c(0x154)](_0x5e600c(0x163))),console['log'](_0x5e600c(0x159)+await _0x177fcb[_0x5e600c(0x156)]());}function _0x279e(){const _0x1b2f22=['DocumentBuilder','\x0aApplication\x20is\x20running\x20on:\x20','594246VuGZae','setContact','@nestjs/swagger','https://docs.nestjs.com/assets/logo/run-players-league.png','addTag','GlobalExceptionFilter','setVersion','./shared/filter/biz.exception.filter','swagger.enable','http.port','title','useGlobalFilters','HttpExceptionFilter','1680824cUKilw','addServer','description','ConfigService','6vYCkJk','1.0','733809ECIrle','50844xHlQQw','./shared/middleware/traceid.middleware','18YdBbJd','tag','useLogger','createDocument','api/doc','@nestjs/config','5gWryZS','282848OkkYvg','./shared/filter/global.exception.filter','TraceIdMiddleware','11392450VrYwbU','create','1981406IvqiKO','email','setup','listen','setDescription','get','serverHost','getUrl','__esModule'];_0x279e=function(){return _0x1b2f22;};return _0x279e();}bootstrap();