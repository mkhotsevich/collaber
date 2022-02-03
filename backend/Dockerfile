FROM node:16.13.2
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . /app
EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]
