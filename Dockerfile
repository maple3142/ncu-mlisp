FROM node:16.6.0

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

CMD ["node", "dist/index.js"]
