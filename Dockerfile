FROM node:10.15-alpine as dependencies

# Create the working dir
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Do not use cache when we change node dependencies in package.json
COPY package.json yarn.lock ./

# Install packages + Prepare cache file
RUN yarn install

FROM dependencies as build

COPY . /opt/app

EXPOSE 3000
CMD ["yarn", "start"]