# FROM node:14-alpine

# COPY . /backend-v2

# WORKDIR /backend-v2

# RUN npm install

# CMD npm start



# from base image node
FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copying all the files from your file system to container file system
COPY package.json .

# install all dependencies
RUN npm install

# copy oter files as well
COPY ./ .

#expose the port
EXPOSE 80

# command to run when intantiate an image
CMD ["npm","start"]