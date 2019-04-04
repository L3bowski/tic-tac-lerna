## Tic Tac Lerna

Proof of concept on how to use Lerna to manage multi-package Typescript projects. Lerna will manage all external and internal dependencies; by running `lerna bootstrap` it will create the symlinks between internal dependencies and will install all the external dependencies.

Since the packages are written in Typescript, we will need to compile them every time there is a change. In order to do so we will create a `build` script in every package `package.json` and we will run them all through lerna: `lerna run build`. This will be our `prepare` npm step (which gets executed after installing and before publishing), along with a lerna bootstrap that will initialize the packages in case they haven't been yet.

If we want to make a clean install `lerna clean` will remove the node_modules folder from all the packages along with the symlinks. We also remove the root folder node_modules in the `reset` script.

Finally, we also use Lerna to individually publish the packages to npm. Every time we make changes in a package and only after having committed the changes in the git repository, we will run `lerna publish`, which will build and analyze the packages, and publish them to npm if there are changes. We will be prompted for the version increase before publishing (e.g. patch, minor, etc.)