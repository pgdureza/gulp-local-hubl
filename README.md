This boilerplate can be used to develop landing pages locally while using es6 & scss.

## Workspace Setup:
1. Clone this repo.
2. Download and install the Java Development Kit (at least jdk 8)
http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
3. Download latest local-hubl-server
https://designers.hubspot.com/docs/tools/local-hubl-server
4. extract the local-hubl-server and copy the following files into the root of this project:
- bin
- conf
- docs
- lib

## Steps for Development 
1. create theme folder under /work/hubthemes/vast/custom/page - you can add html files here for your hubl code
2. create a folder named _pre-compiled
3. add js and styles folder under the _pre-compiled folder. This is where all JS and CSS file changes will be made.
4. run `yarn hubl` to start the hubl server
5. run `yarn start` to start watcher for js and css files

see reference folder under `_pre-compiled/` and `work/hubthemes/vast/custom/page/` as example

## Syncing local files and hubl
https://designers.hubspot.com/docs/tools/using-local-hubl-server-with-ftp