FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

COPY .env .

ENV PORT=3001

CMD ["npm", "run", "start:prod"]

