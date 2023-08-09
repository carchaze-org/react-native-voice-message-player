import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import _theme from '../helpers/theme';

/**
 * TrackerLine component provides a slider-like interface to track progress.
 *
 * @param {object} props - The props of the TrackerLine component.
 * @param {import("../helpers/theme").Theme} [props.theme=_theme] - The theme object with colors.
 * @param {number} [props.thumbSize=16] - Size of the slider thumb.
 * @param {boolean} [props.disabled=false] - Whether the slider is disabled or not.
 * @param {number} [props.totalValue=0] - Total possible value of the slider.
 * @param {number} [props.currentValue=0] - Current value of the slider.
 * @param {function} props.onValuesChange - Callback for value change.
 * @param {function} props.onValuesChangeStart - Callback for value change start.
 * @param {function} props.onValuesChangeFinish - Callback for value change finish.
 * @param {()=>JSX.Element} props.renderComponent - Custom component.
 * @param {string} props.thumbColor - Custom thumb or marker color
 */
const TrackerLine = ({
  theme = _theme,
  thumbSize = 16,
  disabled = false,
  totalValue = 0,
  currentValue = 0,
  onValuesChange,
  onValuesChangeStart,
  onValuesChangeFinish,
  renderComponent,
  thumbColor,
}) => {
  if (!totalValue) return null;
  theme = {..._theme, ...theme};

  const [containerWidth, setContainerWidth] = useState(0);
  const sliderLength = containerWidth;

  if (renderComponent) {
    return renderComponent();
  }

  return (
    <View
      style={styles.container}
      onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}>
      <MultiSlider
        min={0}
        max={Number(totalValue)}
        values={[Number(currentValue)]}
        sliderLength={sliderLength}
        onValuesChange={val => onValuesChange(disabled ? currentValue : val[0])}
        onValuesChangeStart={onValuesChangeStart}
        onValuesChangeFinish={val =>
          onValuesChangeFinish(disabled ? currentValue : val[0])
        }
        selectedStyle={{
          borderColor: disabled ? theme.colors.disabled : theme.colors.label,
          height: 0,
          borderTopWidth: 1.5,
        }}
        step={1}
        snapped
        unselectedStyle={{
          borderColor: theme.colors.secondary,
          height: 0,
          borderTopWidth: 1.5,
        }}
        markerStyle={[
          styles.marker,
          {
            backgroundColor: disabled
              ? theme.colors.disabled
              : thumbColor || theme.colors.secondaryLabel,
            height: thumbSize,
            width: thumbSize,
            borderColor: theme.colors.primaryBackground,
          },
        ]}
      />
    </View>
  );
};

TrackerLine.propTypes = {
  theme: PropTypes.object,
  thumbSize: PropTypes.number,
  disabled: PropTypes.bool,
  totalValue: PropTypes.number,
  currentValue: PropTypes.number,
  onValuesChange: PropTypes.func.isRequired,
  onValuesChangeStart: PropTypes.func.isRequired,
  onValuesChangeFinish: PropTypes.func.isRequired,
  renderComponent: PropTypes.func,
  thumbColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  marker: {
    shadowOpacity: 0,
    elevation: 0,
    borderWidth: 2,
  },
});

export default TrackerLine;
