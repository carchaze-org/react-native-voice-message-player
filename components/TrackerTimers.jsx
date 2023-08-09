import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import secondsToTime from '../helpers/secondsToTime';
import _theme from '../helpers/theme';

const defaultStatusSources = {
  loading: require('../assets/imgs/clock-loader.png'),
  'single-check': require('../assets/imgs/single-check.png'),
  'double-check': require('../assets/imgs/double-check.png'),
  'double-check-viewed': require('../assets/imgs/double-check.png'),
};

/** @typedef {keyof defaultStatusSources} DefaultStatusString*/

/**
 * @typedef {Object} DefaultStatusSources
 * @property {import("react-native").ImageSourcePropType} loading
 * @property {import("react-native").ImageSourcePropType} single-check
 * @property {import("react-native").ImageSourcePropType} double-check
 * @property {import("react-native").ImageSourcePropType} double-check-viewed
 */

/**
 * TrackerTimers component to display timer and timestamp.
 * Allows for custom rendering of both timer and timestamp values.
 *
 * @param {object} props - Properties to configure the component.
 * @param {import("../helpers/theme").Theme} [props.theme=_theme] - Theme for the component.
 * @param {number} props.timer - Timer value in seconds.
 * @param {keyof defaultStatusSources | "none"} props.status - Status icon changed
 * @param {string} props.timestamp - Timestamp value.
 * @param {DefaultStatusSources} props.statusSources - Optional custom status sources for images.
 * @param {({timer:number})=>JSX.Element} [props.renderTimer] - Custom render function for timer.
 *        Receives an object of the form: { timer: number }
 * @param {({timestamp:string})=>JSX.Element} [props.renderTimestamp] - Custom render function for timestamp.
 *        Receives an object of the form: { timestamp: string }
 * @returns {JSX.Element} Rendered TrackerTimers component.
 */
const TrackerTimers = ({
  theme = _theme,
  timer,
  timestamp,
  renderTimer,
  renderTimestamp,
  status,
  statusSources,
}) => {
  theme = {..._theme, ...theme};
  statusSources = {...defaultStatusSources, ...statusSources};
  return (
    <View style={styles.container}>
      {renderTimer ? (
        renderTimer({timer})
      ) : (
        <Text
          style={[
            styles.timerText,
            {color: theme.colors.accent, fontFamily: theme?.typography?.family},
          ]}>
          {secondsToTime(Math.floor(timer))}
        </Text>
      )}

      <View style={styles.rightContainer}>
        {renderTimestamp ? (
          renderTimestamp({timestamp})
        ) : (
          <Text
            style={[
              styles.timestampText,
              {
                color: theme.colors.accent,
                fontFamily: theme?.typography?.family,
              },
            ]}>
            {timestamp}
          </Text>
        )}
        {statusSources?.[status] && (
          <Image
            source={statusSources?.[status]}
            style={[
              styles.statusIcon,
              {
                tintColor:
                  status === 'double-check-viewed'
                    ? theme.colors.primary
                    : theme.colors.secondaryLabel,
              },
            ]}
          />
        )}
      </View>
    </View>
  );
};

// Styles associated with the component.
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  timerText: {
    fontSize: 8,
  },
  timestampText: {
    fontSize: 8,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    height: 8,
    width: 10,
    marginLeft: 4,
    resizeMode: 'contain',
  },
});

TrackerTimers.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      accent: PropTypes.string.isRequired,
    }),
    typography: PropTypes.shape({
      family: PropTypes.string,
    }),
  }).isRequired,
  timer: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  renderTimer: PropTypes.func,
  renderTimestamp: PropTypes.func,
  status: PropTypes.string,
  statusSources: PropTypes.object,
};

export default TrackerTimers;
