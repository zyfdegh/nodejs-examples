#!/bin/sh

## Build manually on CentOS

# yum install -y nodejs
# npm install express
# mkdir router-example-1 && cd router-example-1
# npm init
# vim index.sh

# npm -g install js-beautify
# alias jsfmt='js-beautify -r'
# jsfmt -r index.sh
# node index.js

## Build with docker

sudo docker build -t zyfdedh/nodejs-router-example:dev .

# Run
# sudo docker run -d -p 3000:3000 zyfdedh/nodejs-router-example:dev

# Stop
# sudo docker kill <ContainerID>

