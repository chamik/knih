#!/bin/bash

npm run build
rsync -r --progress ./build/* gaia:/www/knih.chamik.eu/