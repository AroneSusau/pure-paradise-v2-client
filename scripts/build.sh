#! /bin/bash

# Remove previous build.
npm -s run clean

echo 'Building project..\n'

mkdir ./dist

cd src || exit

echo 'Copying Additional Files..\n'
pwd
# Copy css, html and other relevant files that dont require tsc parsing.
cp $(find . \( -name '*.css' -or -name '*.html' -or -name '*.ico' -or -name '*.png' \)) ../dist/

cd ..

browserify ./src/js/index.js | minify >./dist/bundle.js

echo 'Build Complete\n'
