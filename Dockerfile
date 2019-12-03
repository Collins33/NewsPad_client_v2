# Use an official node runtime as a parent image
FROM node:8

# create directory to hold the application code inside the image
WORKDIR /usr/src/newspad

# Install app dependencies
# A wildcard is used to ensure both package.json AND
# package-lock.json are copied where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]