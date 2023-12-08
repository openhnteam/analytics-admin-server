# 火鹏运营平台后管服务

#### 欢迎访问 [openhn官网](https://www.openhn.com) 
#### 前往更详细 [部署文档](https://www.openhn.com/development-manual) 

**开发环境准备**
- 基于 docker 容器化技术进行开发，请先[下载安装 docker](https://docs.docker.com/get-docker/)
- 安装 [docker-compose](https://docs.docker.com/compose/)
- Node（18.18.2)
- 采用 [scripty](https://www.npmjs.com/package/scripty) 管理本项目的所有命令。所有的命令（shell 文件）定义在 `scripts`
  文件夹下。

## 项目结构

项目目录结构
| 文件或文件夹 | 作用                             |
| ------------ | ------------------------------|
| dist         | 后端 - nestjs                  |
| scripts      | 存放所有的 shell 命令            |
| logs         | 服务日志                        |

## 开发流程

```sh
# 初始化服务
npm run bootstrap

# docker相关 
# up - docker-compose 后台启动所有服务（mysql/redis/clickhouse/kafka/zookeeper/ngnix/前端）
# stop - docker-compose 关闭
# restart - docker-compose 重启
npm run up
npm run stop
npm run restart 

# 启动 （服务端），本地环境-配置文件 dist/config/config.development.js
npm run start

# 启动 （服务端），测试环境-配置文件 dist/config/config.test.js
npm run start:test

# 启动 （服务端），生产环境-配置文件 dist/config/config.prod.js
npm run start:prod
```

## docker-compose 一键部署
```sh
# amd64架构(intel芯片)
docker-compose -f docker-compose.yml up -d
# arm64架构(apple m系列芯片)
docker-compose -f docker-compose-arm64.yml up -d
```

## 本地验证
1. 浏览器输入ip地址，可访问后管并初始化管理员账号。以本地搭建举例：http://localhost
2. 各平台前端sdk初始化host参数为 $ip/app。以本地搭建举例：http://localhost/app
