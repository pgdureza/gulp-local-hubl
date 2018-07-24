This boilerplate can be used to develop landing pages locally while using es6 & scss.

## Requirements:
1. Download and install the Java Development Kit (at least jdk 8)
http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2. Download latest local-hubl-server
https://designers.hubspot.com/docs/tools/local-hubl-server
3. create your new theme folder under local-hubl-server/work/hubthemes (this example will use `gulp-local-hubl`)
4. go to local-hubl-server/conf/config.yml and update the value for templateBaseDir to match with your new theme folder name
example: `templateBaseDir: work/hubthemes/gulp-hubl-local`

## Starting local server
1. clone repo into your theme folder (should be `work/hubthemes/`)
2. run `yarn hubl` to start the hubl server 
3. run `yarn start` to start watcher for js and css files 
4. navigate to http://127.0.0.1:8080/custom/page/basic/home.html

* NOTE: The node modules html files are included in the hubl template list, but they are not actual templates. Just ignore those for now.

## Development
1. to create new page templates, add html files in `custom/page/basic`
2. to create and modify js and scss files, modify the files under the `_preprocessed/basic/js` and `_preprocessed/basic/styles` folder.
3. do not make changes to .js and .css files under `custom/page/basic` as these files will be overriden whenever the _preprocessed files will be compiled.
4. take note on custom/page/basic/home.html on how to import the compiled css and js files

* NOTE: You may creae your own them folder instead of using the `basic` folder. Just make sure that the theme folder name unde `_preprocessed/<theme_name>` and `custom/page/<theme_name>` are the same.

## Syncing local files and hubl files through ftp
https://designers.hubspot.com/docs/tools/using-local-hubl-server-with-ftp