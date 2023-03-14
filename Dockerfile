# base image
# Vite did not like the older version of Node that we'd specified, so I switched to the most recent LTS version
FROM node:16-alpine


# set working directory
WORKDIR /app

# give node user READ privilege in the app directory
RUN chown -R node: /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

EXPOSE 8082

USER node

# # start app 
# "dev" rather than "serv" is Vite's default for loading the development environment
# for production build use "start" in place of "dev"
CMD ["npm", "run", "dev"] 