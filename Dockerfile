FROM iojs

# Cache package.json
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production

# Bundle app source
COPY . /src
WORKDIR /src

# Install app dependencies
RUN cp -a /tmp/node_modules /src/

EXPOSE 3000
CMD ["node", "cluster.js"]
