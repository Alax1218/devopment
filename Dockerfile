# Stage 0, "build-stage", based on Node.js, to build and compile the frontend

FROM node:16-bullseye-slim as build-stage
WORKDIR /app
COPY package*.json package-lock.json /app/
RUN npm ci
COPY ./ /app/
CMD ["npm", "run", "start"]

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# RUN serve -s build
# FROM nginx:1.22
# COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
