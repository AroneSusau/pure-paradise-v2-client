#! /bin/bash

# Create latest build
npm run build production

# Upload distribution to s3
aws s3 cp dist/bundle.js s3://pure-paradise-v2
aws s3 cp dist/bundle.js.map s3://pure-paradise-v2
aws s3 cp dist/favicon.ico s3://pure-paradise-v2
aws s3 cp dist/index.html s3://pure-paradise-v2
aws s3 cp dist/title.png s3://pure-paradise-v2

# Invalidate CloudFront caches
aws cloudfront create-invalidation \
  --distribution-id E3P81C2396G2KN \
  --paths "/*"
