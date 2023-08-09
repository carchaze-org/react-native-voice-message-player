import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import _theme from '../helpers/theme';

const defaultSources = {
  playing: require('../assets/imgs/playing.png'),
  pause: require('../assets/imgs/pause.png'),
  download: require('../assets/imgs/download.png'),
  loading: require('../assets/imgs/loading.png'),
  error: require('../assets/imgs/error.png'),
};

/**
 * @typedef {Object} DefaultActionSources
 * @property {import("react-native").ImageSourcePropType} playing
 * @property {import("react-native").ImageSourcePropType} pause
 * @property {import("react-native").ImageSourcePropType} download
 * @property {import("react-native").ImageSourcePropType} loading
 * @property {import("react-native").ImageSourcePropType} error
 */

/**
 * PlayPauseButton component that serves as a button for play, pause, downloading, etc.
 *
 * @param {object} props - The props of the PlayPauseButton component.
 * @param {boolean} [props.isPlaying=false] - If the audio is currently playing.
 * @param {boolean} [props.isDownloadable=false] - If the audio is downloadable.
 * @param {function} props.onPress - The function to call when the button is pressed.
 * @param {function} props.onDownload - The function to call when the download button is pressed.
 * @param {boolean} [props.disabled=false] - If the button should be disabled.
 * @param {boolean} [props.isLoading=true] - If the audio is currently loading.
 * @param {boolean} [props.isError=false] - If there is an error with the audio.
 * @param {import("../helpers/theme").Theme} [props.theme=_theme] - The theme object with colors.
 * @param {DefaultActionSources} [props.configSources=defaultSources] - Optional custom sources for images.
 * @param {import("react-native").ViewStyle} [props.style] - Container Style.
 */
const PlayPauseButton = ({
  isPlaying = false,
  isDownloadable = false,
  onPress,
  onDownload,
  disabled = false,
  isLoading = true,
  isError = false,
  theme = _theme,
  style,
  configSources = {},
}) => {
  disabled = disabled || isLoading;
  const buttonAction = isDownloadable || isError ? onDownload : onPress;
  const sources = {...defaultSources, ...configSources};
  theme = {..._theme, ...theme};

  let icon = sources.pause;
  if (isLoading) icon = sources.loading;
  else if (isError) icon = sources.error;
  else if (isDownloadable) icon = sources.download;
  else if (isPlaying) icon = sources.playing;

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      onPress={buttonAction}
      style={[styles.container, style]}>
      <Image
        source={icon}
        style={[
          styles.image,
          {
            tintColor: disabled ? theme.colors.disabled : theme.colors.accent,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

PlayPauseButton.propTypes = {
  isPlaying: PropTypes.bool,
  isDownloadable: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  theme: PropTypes.object,
  configSources: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 18,
    tintColor: 'black',
    width: 18,
    marginRight: 16,
    marginLeft: 8,
    marginVertical: 8,
    resizeMode: 'contain',
  },
});

export default React.memo(PlayPauseButton);
