FROM node:18-alpine AS preparer

WORKDIR /app

RUN npm install -g turbo

COPY . .

RUN turbo prune --scope=web --docker

#########################################################################

FROM node:18-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY --from=preparer /app/out/json/ .
COPY --from=preparer /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile --ignore-scripts

COPY --from=preparer /app/out/full/ .

RUN pnpm build --filter=web

WORKDIR /app/apps/web

CMD ["pnpm", "start"]
