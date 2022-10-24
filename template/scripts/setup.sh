#!/bin/bash
echo "current dir: $PWD"
rm -r "$PWD/node_modules"
rm -r "$PWD/yarn.lock"
yarn
npx rn-nodeify --install --hack
find ${PWD}/node_modules/*/ -name "build.gradle" -type f | xargs perl -pi -e 's/\bcompile\b/implementation/g;'
npx jetify