# @carchaze/react-native-voice-message-player

![GitHub Stars](https://img.shields.io/github/stars/carchaze-org/react-native-voice-message-player?style=social)
![GitHub Forks](https://img.shields.io/github/forks/carchaze-org/react-native-voice-message-player?style=social)

![Supports iOS](https://img.shields.io/badge/supports-iOS-blue.svg)
![Supports Android](https://img.shields.io/badge/supports-Android-green.svg)

<img src="https://www.pngmart.com/files/3/Sound-Wave-PNG-File.png" alt="Demo Gif"  height="100" width="500"/>

\
[![publish-package](https://img.shields.io/badge/publish-package-brightgreen.svg)](LINK_TO_PUBLISH_ACTION)
[![License](https://img.shields.io/npm/l/@carchaze/react-native-voice-message-player.svg)](https://github.com/carchaze-org/react-native-voice-message-player/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
![GitHub Top Language](https://img.shields.io/github/languages/top/carchaze-org/react-native-voice-message-player)
![Last Commit](https://img.shields.io/github/last-commit/carchaze-org/react-native-voice-message-player)

The `@carchaze/react-native-voice-message-player` is a flexible and feature-rich voice message player tailored for React Native applications. It's designed to provide developers with a seamless solution to integrate voice message playback into their apps with various customization options.

For a detailed list of changes, please refer to the [CHANGELOG.md](CHANGELOG.md).


## Maintainer Required 🤝

**This project is currently looking for a maintainer. If you are interested, please reach out!** 🚨

## Features

- **Theming and Styling**: Customize to fit your app's look and feel.
- **Profile Support**: Attach user profiles with custom images.
- **Custom Renderers**: Fine-tune UI components.
- **Download Progress**: Display progress for downloading voice messages from URLs.
- **Audio Playback Controls**: Play, pause, and load voice messages with user feedback.

## Demo

<img src="https://firebasestorage.googleapis.com/v0/b/hamzzahussain.appspot.com/o/Utilities%2Freact-native-voice-message-player__ios.gif?alt=media&token=d11bb38a-dd4f-4fc2-9781-f04194d6a369" alt="Demo Gif"  height="400" />

<a href="https://www.buymeacoffee.com/hamxahusain" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;"></a>


## Installation

```bash
npm install @carchaze/react-native-voice-message-player
# or
yarn add @carchaze/react-native-voice-message-player

# On Ios
cd ios && pod install && cd..
```

## Usage

1. Import the `RNVoiceMessagePlayer` component into your React Native file:

```jsx
import RNVoiceMessagePlayer from '@carchaze/react-native-voice-message-player';
```

2. Use the `RNVoiceMessagePlayer` component in your render method:

```jsx
const localFile = require('./path/to/audio.*')
const localUrl = "file:///path/to/audio.*"
const onlineUrl = "https://example.com/audio.*"

// Load local file
<RNVoiceMessagePlayer source={localFile} />

// Load local url
<RNVoiceMessagePlayer source={localUrl} />
<RNVoiceMessagePlayer source={{uri: localUrl}} />

// Load online url
<RNVoiceMessagePlayer source={onlineUrl} autoDownload={true} />
```

## Props

Below is a detailed list of props you can use with the `RNVoiceMessagePlayer`:

### Main Props

| Prop                     | Description                                                       | Type                         | Required | Default Value            |
| ------------------------ | ----------------------------------------------------------------- | ---------------------------- | -------- | ------------------------ |
| `source`                 | Source of the audio, either an object with URI or a require path. | `{uri: string} \| require()` | `true`   | -                        |
| `timestamp`              | The timestamp of the voice message.                               | `string`                     | -        | -                        |
| `autoDownload`           | Whether to automatically download audio if given a URL.           | `boolean`                    | -        | `false`                  |
| `customTheme`            | Custom theme to override the default theme.                       | `Theme`                      | -        | -                        |
| `containerStyle`         | Style for the main container.                                     | `ViewStyle`                  | -        | -                        |
| `renderDownloadProgress` | Custom render function for the download progress.                 | `Function`                   | -        | -                        |
| `renderText`             | Custom render function for the text.                              | `Function`                   | -        | -                        |
| `textNotDownloaded`      | Text to show when the audio is not downloaded.                    | `string`                     | -        | 'Download voice message' |
| `textLoading`            | Text to show while loading the audio.                             | `string`                     | -        | 'Loading...'             |
| `textError`              | Text to show when there's an error.                               | `string`                     | -        | 'Audio is not playable'  |
| `ref`                    | Reference to the component.                                       | `React.Ref`                  | -        | -                        |

### Chat Status Props

| Prop                       | Description                          | Type                  | Required | Default Value    |
| -------------------------- | ------------------------------------ | --------------------- | -------- | ---------------- |
| `chatStatusProps.isNew`    | Whether the message is new.          | `boolean`             | -        | `false`          |
| `chatStatusProps.isPlayed` | Whether the message has been played. | `boolean`             | -        | `false`          |
| `chatStatusProps.status`   | Status of the chat message.          | `DefaultStatusString` | -        | `'single-check'` |

### Profile Props

| Prop                                     | Description                                     | Type                  | Required | Default Value |
| ---------------------------------------- | ----------------------------------------------- | --------------------- | -------- | ------------- |
| `profileProps.profilePosition`           | Position of the profile.                        | `('left' \| 'right')` | -        | 'right'       |
| `profileProps.profileImageSource`        | Source for the profile image.                   | `ImageSourcePropType` | -        | -             |
| `profileProps.profileMicSource`          | Source for the microphone icon.                 | `ImageSourcePropType` | -        | -             |
| `profileProps.ProfileImagePressDisabled` | Whether the profile image press is disabled.    | `boolean`             | -        | -             |
| `profileProps.onProfileImagePress`       | Callback when profile image is pressed.         | `Function`            | -        | -             |
| `profileProps.renderProfileMic`          | Custom render function for the microphone icon. | `Function`            | -        | -             |
| `profileProps.renderProfileImage`        | Custom render function for the profile image.   | `Function`            | -        | -             |
| `profileProps.renderProfile`             | Custom render function for the whole profile.   | `Function`            | -        | -             |
| `profileProps.profileContainerStyle`     | Style for the profile container.                | `ViewStyle`           | -        | -             |

### Bottom Props

| Prop                                | Description                                      | Type                   | Required | Default Value |
| ----------------------------------- | ------------------------------------------------ | ---------------------- | -------- | ------------- |
| `bottomProps.renderBottomTimestamp` | Custom render function for the bottom timestamp. | `Function`             | -        | -             |
| `bottomProps.renderBottomTimer`     | Custom render function for the bottom timer.     | `Function`             | -        | -             |
| `bottomProps.bottomStatusSources`   | Sources for the bottom status.                   | `DefaultStatusSources` | -        | -             |
| `bottomProps.bottomContainerStyle`  | Style for the bottom container.                  | `ViewStyle`            | -        | -             |
| `bottomProps.renderBottom`          | Custom render function for the bottom section.   | `Function`             | -        | -             |

### Left Action Props

| Prop                                       | Description                                  | Type                   | Required | Default Value |
| ------------------------------------------ | -------------------------------------------- | ---------------------- | -------- | ------------- |
| `leftActionProps.leftActionSources`        | Sources for the left action buttons.         | `DefaultActionSources` | -        | -             |
| `leftActionProps.leftActionContainerStyle` | Style for the left action container.         | `ViewStyle`            | -        | -             |
| `leftActionProps.renderLeftAction`         | Custom render function for the left actions. | `Function`             | -        | -             |

### Track Props

| Prop                               | Description                                 | Type       | Required | Default Value |
| ---------------------------------- | ------------------------------------------- | ---------- | -------- | ------------- |
| `trackProps.renderTrack`           | Custom render function for the audio track. | `Function` | -        | -             |
| `trackProps.onTrackChange`         | Callback when the track changes.            | `Function` | -        | -             |
| `trackProps.onTrackChangeComplete` | Callback when track change is complete.     | `Function` | -        | -             |
| `trackProps.onTrackChangeStart`    | Callback when track change starts.          | `Function` | -        | -             |

### Audio Event Callbacks

| Prop                | Description                                     | Type       | Required | Default Value |
| ------------------- | ----------------------------------------------- | ---------- | -------- | ------------- |
| `onPlay`            | Callback when the audio starts playing.         | `Function` | -        | -             |
| `onPause`           | Callback when the audio is paused.              | `Function` | -        | -             |
| `onError`           | Callback when there's an error.                 | `Function` | -        | -             |
| `onLoading`         | Callback while the audio is loading.            | `Function` | -        | -             |
| `onDownload`        | Callback when the audio starts downloading.     | `Function` | -        | -             |
| `onDownloadSuccess` | Callback when the audio download is successful. | `Function` | -        | -             |
| `onDownloadSaved`   | Callback when the downloaded audio is saved.    | `Function` | -        | -             |
| `onDownloadFailed`  | Callback when the audio download fails.         | `Function` | -        | -             |
| `onLoadStart`       | Callback when the audio starts loading.         | `Function` | -        | -             |
| `onLoadSuccess`     | Callback when the audio loading is successful.  | `Function` | -        | -             |
| `onLoadFailed`      | Callback when the audio loading fails.          | `Function` | -        | -             |

## License

This project is licensed under the [MIT License](LICENSE).

## Contributors

A big thank you to all the contributors who have helped make this project better!

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/carchaze-org">
        <img src="https://play-lh.googleusercontent.com/WG6kUItvOXujRVanWx1X8cJz2AIAZ8c0ET2m8Q9S88D-VQe51ZR5IXuNIE-OdOUk7g=w600-h300-pc0xffffff-pd" width="100px;"  alt=""/>
        <br />
        <sub><b>CarChaze Pvt Ltd</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hamzaxeros">
        <img src="https://carchaze.com/_next/static/media/hamza-cto.c1a4801c.png" width="50px;" alt=""/>
        <br />
        <sub><b>Hamza Hussain</b></sub>
      </a>
    </td>
  </tr>
</table>

## Credits

We'd like to thank the following libraries and resources that have contributed to the development of React Native Voice Message Player:

- [React Native](https://reactnative.dev)
- [CarChaze Pvt Ltd](https://github.com/carchaze-org)
- [react-native-sound](https://github.com/zmxv/react-native-sound)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react](https://reactjs.org)
- [Hamza Hussain](https://github.com/hamzaxeros)

## Contact

If you have any questions or need assistance, feel free to reach out to us:

- Email: hamza@carchaze.com
- GitHub Issues: [Report Issue](https://github.com/carchaze-org/react-native-voice-message-player/issues)

## FAQs

### General

#### 1. What is the primary purpose of React Native Voice Message Player?

**Answer:** The `@carchaze/react-native-voice-message-player` is designed to provide developers a seamless solution to integrate voice message playback in their React Native apps with various customization options.

#### 2. Is this package free to use?

**Answer:** Yes, the package is open-source and free to use. We appreciate contributions from the community to improve it further!

### Technical

#### 3. Which versions of React Native are supported?

**Answer:** The package supports React Native versions 0.60 and above. For older versions, you might encounter compatibility issues.

#### 4. How do I customize the theme of the player?

**Answer:** You can use the `customTheme` prop to override the default styles and match your app's theme. Refer to the Props section for more details.

#### 5. Are there any known issues with the package?

**Answer:** All known issues are tracked on our GitHub issues page. If you encounter a problem, please check there first, and if it's a new issue, feel free to report it.

### Contributing

#### 6. I found a bug! How can I report it?

**Answer:** We appreciate your feedback! Please report any bugs or issues on our GitHub repository's issues page.

#### 7. I have a feature request. Where can I submit it?

**Answer:** Feature requests can be submitted on our GitHub repository. We welcome contributions and suggestions from the community.

#### 8. How can I contribute to the project?

**Answer:** Please refer to our Contributing Guidelines for detailed steps on how to contribute. We appreciate all forms of contributions, from code to documentation and testing.

### Miscellaneous

#### 9. Are there plans for future features or improvements?

**Answer:** We continuously aim to improve the package and add new features. Keep an eye on our GitHub repository for the latest updates and planned features.

#### 10. How can I support the project?

**Answer:** Using the package, reporting bugs, suggesting features, and contributing to the codebase are all great ways to support the project. Additionally, giving the repository a star on GitHub helps boost its visibility in the community!

## Contributing Guidelines

At CarChaze, we value the power of the community and believe in the open-source spirit. We are thrilled you're considering contributing to the `React Native Voice Message Player` package. Before you start, please ensure you've read and understood these guidelines.

### Reporting Bugs or Suggesting Enhancements

If you come across any issues or have ideas for improvements:

1. Check the [issues](https://github.com/carchaze-org/react-native-voice-message-player/issues) page to ensure your problem or suggestion hasn't been reported or addressed already.
2. If your issue isn't listed, you can [create a new one](https://github.com/carchaze-org/react-native-voice-message-player/issues/new).

### Code Contributions

1. **Fork and Clone**: Fork the `react-native-voice-message-player` repository, then clone your fork onto your machine.
2. **Create a New Branch**: It's a best practice to create a new branch for each feature or fix you are working on.
3. **Make Necessary Changes**: Write your code, ensuring you follow CarChaze's coding standards. Make sure the package functions as intended and doesn't introduce new issues.
4. **Test**: Ensure your changes are well-tested. Add or update tests as necessary.
5. **Pull Request**: Submit a pull request to the `main` branch. Provide a comprehensive description of the changes and link the related issues.

### Documentation

If you're making changes to features that are already documented, make sure you update the corresponding parts of the documentation. If you introduce a new feature, please add related documentation.

### Stay Updated

Ensure you pull changes from the main repository to your fork regularly to stay updated. This helps reduce merge conflicts when submitting a PR.

### Community and Behavior

Please remember to adhere to CarChaze's [Code of Conduct](CODE_OF_CONDUCT.md). We foster an inclusive and respectful community, and we expect contributors to do the same.

### Recognition

Every contributor gets recognized! All accepted contributions will see the contributor's name added to the `Credits` section of our README.

### Questions?

If you have any questions about contributing or face issues while setting up, don't hesitate to reach out. Create an issue, and a team member will assist you.

Thank you for being a part of CarChaze's open-source initiatives! Your efforts help make the React Native ecosystem even better.




