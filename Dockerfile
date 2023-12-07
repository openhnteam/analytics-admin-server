FROM node:18-buster
USER root
ENV TZ=Asia/Shanghai
RUN mkdir -p /home/app/
COPY ./ /home/app/analytics-admin/
RUN ls -la /home/app/analytics-admin/*
WORKDIR /home/app/analytics-admin/
EXPOSE 8083
RUN npm install
CMD ["node", "dist/main"]