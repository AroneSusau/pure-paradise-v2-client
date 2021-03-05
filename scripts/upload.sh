#! /bin/bash

# Create latest build
npm run build production

# Upload distribution to s3
aws s3 cp dist/ s3://pure-paradise-v2 --recursive

# Invalidate CloudFront caches
aws cloudfront create-invalidation \
  --distribution-id E3P81C2396G2KN \
  --paths "/*"
