# base image
# Vite did not like the older version of Node that we'd specified, so I switched to the most recent version
FROM node:19-alpine


# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN npm install


# Without this section, I was getting continual errors
# when trying to run the container.
# I found the solution here: https://www.reddit.com/r/docker/comments/ww6rt5/eacces_permission_denied/
 RUN mkdir /app/node_modules/.vite \
     && chown -R node:node /app/node_modules/.vite

USER node

EXPOSE 8082
# # start app 
# "dev" rather than "serv" is Vite's default for loading the development environment
CMD ["npm", "run", "dev"]