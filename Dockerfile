FROM node:latest
ARG NPM_TOKEN=npm_Q7x2LmN8vB4kT9wR1yZ6cD3fG5hJ0pA2sE4u
ENV NPM_TOKEN=$NPM_TOKEN
WORKDIR /app
COPY . .
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc && npm install
EXPOSE 22 3000
CMD ["npm", "run", "dev", "--", "--host"]
