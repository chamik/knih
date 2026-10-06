
build:
    npm run build

publish: build
    rsync -r --progress ./build/* gaia:/www/knih.chamik.eu/
