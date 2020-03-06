#! /bin/bash

# Upload distribution to s3
aws s3 cp dist/bundle.js  s3://aronesusau
aws s3 cp dist/favicon.ico  s3://aronesusau
aws s3 cp dist/index.css  s3://aronesusau
aws s3 cp dist/index.html  s3://aronesusau
aws s3 cp dist/title.png  s3://aronesusau

# Invalidate CloudFront caches
aws cloudfront create-invalidation \
    --distribution-id E3P81C2396G2KN \
    --paths "/*"