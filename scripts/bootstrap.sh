#!/bin/bash

echo "Bootstrap ..."

# 安装 npm 包
npm install
# docker环境启动
npm run up
# scripty授权
chmod -R +x scripts
