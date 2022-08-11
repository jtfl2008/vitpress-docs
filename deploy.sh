#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/jtfl2008/vitepress-blog.git master:gh-pages
cd -
