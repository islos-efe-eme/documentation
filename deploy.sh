#!/usr/bin/env sh
set -e
yarn docs:build
cd docs/.vuepress/dist
echo 'islos.appgranada.com' > CNAME
git init
git add -A
git commit -m 'New docs deployment'
git push -f git@github.com:islos/product.git master:gh-pages
cd -