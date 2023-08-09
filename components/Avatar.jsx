import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import _theme from '../helpers/theme';

const AvatarIcon = require('../assets/imgs/avatar.png');
const MicIcon = require('../assets/imgs/mic.png');

/**
 * Avatar component displays a user's avatar alongside a microphone icon.
 *
 * @param {object} props - The props of the Avatar component.
 * @param {function} [props.renderMic] - Custom render function for the microphone.
 * @param {function} [props.renderImage] - Custom render function for the avatar image.
 * @param {import("../helpers/theme").Theme} [props.theme=_theme] - The theme object with colors.
 * @param {boolean} [props.disabled] - If true, the Avatar's touch functionality is disabled.
 * @param {'left' | 'right'} [props.micPosition='left'] - The position of the microphone icon.
 * @param {function} [props.onImagePress] - The function to run on pressing the avatar.
 * @param {import('react-native').ImageSourcePropType} [props.imageSource] - The source of the avatar image.
 * @param {import('react-native').ImageSourcePropType} [props.micSource] - The source of the microphone image.
 * @param {string} [props.micColor] - The tint color of mic icon
 */
const Avatar = ({
  renderMic,
  renderImage,
  theme = _theme,
  disabled,
  micPosition = 'left',
  onImagePress,
  imageSource,
  micSource,
  micColor,
}) => {
  theme = {..._theme, ...theme};

  return (
    <View style={styles.container}>
      {renderImage ? (
        renderImage({imageSource})
      ) : (
        <TouchableOpacity
          disabled={disabled || !onImagePress}
          activeOpacity={0.5}
          onPress={onImagePress}
          style={[
            styles.avatarContainer,
            {borderColor: theme.colors.secondary},
          ]}>
          <Image
            source={imageSource || AvatarIcon}
            style={[
              styles.avatar,
              !imageSource && {
                tintColor: theme.colors.secondary,
              },
            ]}
          />
        </TouchableOpacity>
      )}
      {renderMic ? (
        renderMic({micSource})
      ) : (
        <Image
          source={micSource || MicIcon}
          style={[
            styles.mic,
            {
              tintColor: micColor || theme.colors.secondaryLabel,
              [micPosition]: -6,
            },
          ]}
        />
      )}
    </View>
  );
};

Avatar.propTypes = {
  renderMic: PropTypes.func,
  renderImage: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      secondary: PropTypes.string.isRequired,
      primary: PropTypes.string.isRequired,
    }).isRequired,
  }),
  disabled: PropTypes.bool,
  micPosition: PropTypes.oneOf(['left', 'right']),
  onImagePress: PropTypes.func,
  imageSource: Image.propTypes.source,
  micSource: Image.propTypes.source,
  micColor: PropTypes.string,
};

const styles = StyleSheet.create({
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  avatar: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  mic: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 3,
  },
});

export default React.memo(Avatar);
