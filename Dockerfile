#FROM node:lts-alpine
## делаем каталог 'app' текущим рабочим каталогом
#WORKDIR /app
#COPY . .
## копируем оба '' и '' (если есть)
##COPY package*.json ./
## устанавливаем зависимости проекта
#RUN yarn install
## копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
#COPY . .
### собираем приложение для production с минификацией
#RUN yarn run build
#EXPOSE 3000
#CMD [ "dist" ]

##build
#FROM node:lts-alpine
#RUN apk add g++ make py3-pip
#WORKDIR /app
#COPY . .
#RUN yarn install
## copy all files
##COPY . .
#CMD ["yarn", "dev"]

#FROM node:lts-alpine AS builder
#RUN apk add g++ make py3-pip
#WORKDIR /app
#COPY . .
#RUN yarn install && yarn build
#
#FROM nginx:alpine
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /app/dist .
#EXPOSE 80
#ENTRYPOINT ["nginx", "-g", "daemon off;"]

#FROM node:lts-alpine
#RUN npm install -g http-server
#WORKDIR /app
#COPY . .
#RUN yarn install
#COPY . .
#RUN yarn build
#EXPOSE 3000
#CMD [ "http-server", "dist" ]

#FROM node:lts-alpine
#WORKDIR /app
#COPY . .
#RUN yarn install
#COPY . .
#EXPOSE 3000
#CMD ["yarn", "dev"]
FROM node:lts-alpine as builder
WORKDIR /usr/src/app
COPY . ./
RUN yarn install
RUN yarn build
FROM nginx:alpine
COPY --from=builder /usr/src/app/dist /var/www
COPY ./nginx/default.conf /etc/nginx/nginx.conf
EXPOSE 3000
ENTRYPOINT ["nginx","-g","daemon off;"]

#FROM node:16-alpine3.13 as build-stage
#WORKDIR /app
#COPY . .
#RUN yarn install
#COPY . .
#RUN yarn build

#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


#если захотите нджинкс, то 4 строку меняйте на RUN yarn install && yarn build + надо будет настроить конфиг нджинкса
# типа того, что ниже
#server {
#    listen       5173;
#    server_name  localhost;
#    root   /usr/share/nginx/html;
#    index  index.html;
#    location / {
#        try_files $uri $uri/ /index.html ;
#    }
#}
#FROM nginx:alpine
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /app/build .
#EXPOSE 5173
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
