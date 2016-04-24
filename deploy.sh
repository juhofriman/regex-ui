#!/bin/bash
set -e

cd dist
git init

git config user.name "Travis CI"
git config user.email "juho.t.friman@gmail.com"

git add .
git commit -m "Deployin built artifact to github pages"

GH_REF=github.com/juhofriman/regex-ui

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
