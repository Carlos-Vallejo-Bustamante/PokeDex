# Stage 1: Build
# FROM node:16-alpine AS build

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# RUN ls -alt


# # Stage 2
# FROM nginx:1.17.1-alpine

# COPY --from=build /usr/src/app/dist/PokeDex /usr/share/nginx/html
# COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 9778:80

# RUN rm -rf /usr/share/nginx/html/*

# CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/dist/*

CMD ["nginx", "-g", "daemon off;"]


