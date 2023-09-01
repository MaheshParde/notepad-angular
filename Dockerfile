# Use an official Node.js runtime as the base image
FROM node:14
WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm cache clean --force
#RUN npm install -g yarn
#RUN npm install
COPY ./dist/hello-world-app .
EXPOSE 4200
CMD ["npm", "start"]

#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist/jenkins-test /usr/share/nginx/html
