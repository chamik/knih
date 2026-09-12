
build:
    npm run build

publish: 
    rsync -r --progress ./build/* gaia:/www/knih.chamik.eu/
