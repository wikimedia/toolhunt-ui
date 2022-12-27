# base image
# Vite did not like the older version of Node that we'd specified, so I switched to the most recent LTS version
FROM node:hydrogen-alpine


# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# Without this line the page will not load
COPY . . 

EXPOSE 8082

# Without this section, I was getting continual errors
# when running docker-compose.
# I found the solution here: https://www.reddit.com/r/docker/comments/ww6rt5/eacces_permission_denied/
RUN mkdir /app/node_modules/.vite \
    && chown -R node:node /app/node_modules/.vite

USER node

# # start app 
# "dev" rather than "serv" is Vite's default for loading the development environment
CMD ["npm", "run", "dev"]