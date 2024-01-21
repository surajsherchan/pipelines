###########
# Builder #
###########

# pull official base image
FROM node:18.18.2

# set working directory
WORKDIR /app

#installing and cache app dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn install

#create build
COPY . . 

# EXPOSE 4500

CMD ["yarn", "start"]

