FROM node as base


FROM base as developpment
ENV NODE_ENV=development
WORKDIR /app
COPY package.json .
RUN npm install @types/node --save-dev
COPY . .
EXPOSE 3000
CMD ["npm","run","start-dev" ]

FROM base as production
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start" ]