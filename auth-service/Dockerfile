FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
RUN npm install dotenv

COPY . .
EXPOSE 3000
RUN chown -R node /src/app
USER node
CMD ["sh", "-c", "node -r dotenv/config `which npm` start"]



