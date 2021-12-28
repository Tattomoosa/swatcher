#!/bin/bash
# Updates the github.io page by building and pushing to the repo
# TODO: This should be done with a GitHub action

parcel build index.html --public-url /swatcher/ &&
  git add dist/* &&
  git commit -m "$1" &&
  git subtree push --prefix dist origin gh-pages
