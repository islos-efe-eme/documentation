# Documentation

> Los Santos

Ensure you have the following prerequisites installed:

- [Node Erbium](https://nodejs.org/en/) (v12.x LTS) from https://nodejs.org/en/
- [Yarn](https://yarnpkg.com/en/)


### Getting started

Clone the repository:

```sh
$ git clone https://github.com/islos-efe-eme/documentation
$ cd documentation
```

Install dependencies:

```sh
$ yarn
```

Local preview (http://localhost:8080) + hot-reload (see as you code):

```sh
$ yarn docs:dev
```

Local build (this used by `deploy.sh` only):

```sh
$ yarn docs:build
```

Deploy to production (this uses `deploy.sh`):

```sh
$ yarn deploy
```

### New section

1. Create a directory for your section: `mkdir docs/my-section`
2. Create the entry point for your section: `touch docs/my-section/README.md`
3. Add the route `'/my-section/'` to the array of routes in the configuration file `.vuepress/config.js`.
4. The new section will be available under `URL/my-section/`. 

### Docker support

Use the provided `Dockerfile` to build the image and run a container. 

```sh
$  docker build --rm -f "Dockerfile" -t documentation:latest "."
$  docker run --rm -d -p 8080:8080/tcp documentation:latest
```

Visit http://localhost:8080 on your browser.