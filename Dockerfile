FROM node:14.15-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#STAGE 2
FROM nginx:1.17.1-alpine
COPY config_nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/test-task /usr/share/nginx/html


