# node-in-docker
A NodeJS app with a docker file made from following this tutorial - https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## Prerequisites

You will need [Docker](https://www.docker.com/products/docker) installed.

## Running

Checkout this repo, install the dependencies and fire it up:

```
git clone git@github.com:jmalk/node-in-docker.git
cd node-in-docker
docker build -t $(whoami)/node-web-app .
docker run -p 49160:8080 -d $(whoami)/node-web-app
```

Once the image is built and the container is running, you should be able to see a "Response from root" by going to [localhost:41960](localhost:41960) in a browser of your choice.
