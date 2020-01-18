# Product documentation

> Los Santos

### How to

```sh
$ git clone https://github.com/islos-efe-eme/product
$ cd product
$ yarn

# Local preview
$ yarn docs:dev

# Local build (optional)
$ yarn docs:build

# Deploy to production
$ yarn deploy
```

### New section

```sh
$ mkdir docs/my-section
$ touch docs/my-section/README.md
$ nano docs/my-section/README.md
```

Your new section will be available under _domain.com/my-section/_ once deployed. 

**Always use a pull request for collaborating.**