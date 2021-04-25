FROM node:lts-alpine

WORKDIR /usr/src/back

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=1337
CMD [ "yarn", "start" ]
