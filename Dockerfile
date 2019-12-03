# Use an official node runtime as a parent image
FROM node:8

# make a directory
RUN mkdir -p /my-app

# set working directory
WORKDIR ./

COPY ["package.json", "package-lock.json*", "./"]

# install dependencies
RUN npm ci

EXPOSE 3000

CMD npm start