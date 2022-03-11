# build stage
FROM node:14 as build-stage
WORKDIR /app

COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /home/superuser/eyepacs-front
COPY .env /home/superuser/eyepacs-front
COPY /deployments/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
