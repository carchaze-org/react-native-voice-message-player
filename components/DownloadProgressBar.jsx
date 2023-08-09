import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import _theme from '../helpers/theme';

/**
 * DownloadProgressBar component displays the progress of a download operation.
 *
 * @param {object} props - The props of the DownloadProgressBar component.
 * @param {number} [props.percentage=0] - The percentage of the download completion.
 * @param {import("../helpers/theme").Theme} [props.theme=_theme] - The theme object with colors.
 * @param {function} [props.renderComponent] - Custom render function for the progress bar.
 */
const DownloadProgressBar = ({
  percentage = 0,
  theme = _theme,
  renderComponent,
}) => {
  theme = {..._theme, ...theme};
  const displayPercentage = Math.min(
    100,
    Math.max(0, Math.floor(percentage)),
  ).toFixed(1);

  if (renderComponent) {
    return renderComponent({percentage: displayPercentage, theme});
  }

  return (
    <View
      style={[
        styles.triangle,
        {backgroundColor: theme?.colors?.secondaryBackground},
      ]}>
      <View
        style={[
          styles.loader,
          {
            width: `${displayPercentage}%`,
            backgroundColor: theme?.colors?.label,
          },
        ]}
      />
      <Text style={[styles.text, {color: theme.colors.accent}]}>
        Downloading: {displayPercentage}%
      </Text>
    </View>
  );
};

DownloadProgressBar.propTypes = {
  percentage: PropTypes.number,
  theme: PropTypes.object,
  renderComponent: PropTypes.func,
};

const styles = StyleSheet.create({
  triangle: {
    height: 11,
    flex: 1,
    borderRadius: 11,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
  },
  loader: {
    height: '100%',
    borderRadius: 11,
    opacity: 0.6,
  },
  text: {
    fontSize: 7,
    position: 'absolute',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    textTransform: 'capitalize',
    textDecorationLine: 'none',
    fontStyle: 'italic',
    opacity: 0.6,
  },
});

export default React.memo(DownloadProgressBar);
