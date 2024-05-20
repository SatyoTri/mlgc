FROM debian

FROM node

ENV MODEL_URL https://storage.googleapis.com/submission-mlgc/model-in-prod/model.json
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "start"]