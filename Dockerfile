FROM swr.cn-south-1.myhuaweicloud.com/fenggp/node:22.6.0
WORKDIR /nest-app
COPY . .
RUN pnpm config set registry https://registry.npmmirror.com
RUN pnpm install && pnpm run build
CMD ["pm2-runtime", "start", "ecosystem.json"]
