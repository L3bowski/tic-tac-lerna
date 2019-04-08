## Tic Tac Lerna

Proof of concept on how to use Lerna to manage multi-package Typescript projects. Lerna will manage all external and internal dependencies; by running `lerna bootstrap` it will create the symlinks between internal dependencies and will install all the external dependencies.

Since the packages are written in Typescript, we will need to compile them every time there is a change. In order to do so we will create a `build` script in every package `package.json` and we will run them all through lerna: `lerna run build`. This will be our `prepare` npm step (which gets executed after installing and before publishing), along with a lerna bootstrap that will initialize the packages in case they haven't been yet.

If we want to make a clean install `lerna clean` will remove the node_modules folder from all the packages along with the symlinks. We also remove the root folder node_modules in the `reset` script.

Finally, we also use Lerna to individually publish the packages to npm. Every time we make changes in a package and only after having committed the changes in the git repository, we will run `lerna publish`, which will build and analyze the packages, and publish them to npm if there are changes. We will be prompted for the version increase before publishing (e.g. patch, minor, etc.)

*Note that the root folder package.json `version` is irrelevant, since this module does not contain any code and neither will be published to npm*

### Add new package

Lerna provides a command line option to add a new package: `lerna create <package-name>`. It creates a new npm package and fills some of the package.json fields with available project information (e.g. the git repository, version, author, etc.). We could do it manually, but is a nice way to get uniform package.json files.

Be aware that Lerna is expecting Javascript files instead of Typescript; by default the main property of the package.json will be 'lib/<package-name>.js'

### File structure

By default Lerna will search for the dependencies source code in each package `lib` folder. We can change this folder through the `files` property of the package.json. In this project we use `dist` instead of `lib`, since would be confusing to have the compiled files in a `lib` folder.