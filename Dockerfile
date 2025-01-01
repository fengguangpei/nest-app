FROM swr.cn-south-1.myhuaweicloud.com/fenggp/node:22.6.0
WORKDIR /nest-app
COPY . .
RUN npm config set registry https://registry.npmmirror.com
RUN npm install && npm run build
CMD ["pm2-runtime", "start", "ecosystem.json"]
