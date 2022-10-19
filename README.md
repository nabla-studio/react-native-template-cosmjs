# 🚀 React Native Template CosmJS

<p>
  <a href="https://github.com/nabla-studio/react-native-template-cosmjs#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/nabla-studio/react-native-template-cosmjs/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/nabla-studio/react-native-template-cosmjs/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> React Native template for a quick start with TypeScript and CosmJS.

This template is based on:

- [React Native Template Typescript](https://github.com/react-native-community/react-native-template-typescript)
- [CosmJS](https://github.com/cosmos/cosmjs)

We made this repo to solve the following issue:

- [CosmJS incompatibility with ES2018](https://github.com/cosmos/cosmjs/issues/1144)

This was made possible thanks to the 0.70.0 release of React Native, which solved the compatibility problems related to BigInt:

- [React Native 0.70.0 CHANGELOG](https://github.com/facebook/react-native/blob/main/CHANGELOG.md#0700)

## ✅ Requirements

- React Native >= 0.70.0
- Ruby >= 3.1.0

## ⭐ Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template
- Minimal additional dependencies
- Default setup for CosmJS compatibility

## ⚙️ Usage

```sh
npx react-native init MyApp --template https://github.com/nabla-studio/react-native-template-cosmjs
```

## ⚠️ React Native CLI

This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the react-native-template-cosmjs: Not found error, please try adding the `--ignore-existing` flag to [force npx to ignore](https://github.com/npm/npx#description) any locally installed versions of the CLI and use the latest.

Further information can be found here: https://github.com/react-native-community/cli#about

## 💻 Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## 🆘 Support

For support or suggestions, you can create a new [issue](https://github.com/nabla-studio/react-native-template-cosmjs/issues)

## 🧪 Tests

The template was tested on `macOS Monterey 12.2.1` and on `MacBook pro (13-inch, M1, 2020)`.

## 🔏 License

Copyright © 2022 [nabla](https://github.com/nabla-studio)

This project is licensed by [MIT License](LICENSE).
