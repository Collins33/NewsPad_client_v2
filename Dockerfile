# Use an official node runtime as a parent image
FROM node:8

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# install dependencies
RUN npm ci

EXPOSE 3000

CMD npm start