/**
 * Represents the color settings for the theme.
 * @typedef {Object} Colors
 * @property {string} primary - The primary color.
 * @property {string} secondary - The secondary color.
 * @property {string} tertiary - The tertiary color.
 * @property {string} primaryBackground - The primary background color.
 * @property {string} secondaryBackground - The secondary background color with opacity.
 * @property {string} disabled - The disabled color.
 * @property {string} accent - The accent color.
 * @property {string} label - The label color with opacity.
 * @property {string} secondaryLabel - The secondary label color.
 */

/**
 * Represents the typography settings for the theme.
 * @typedef {Object} Typography
 * @property {string} [family] - The font family. Undefined by default.
 */

/**
 * The default theme configuration.
 * @typedef {Object} Theme
 * @property {Colors} colors - The theme's color settings.
 * @property {Typography} typography - The theme's typography settings.
 * @property {number} roundness - The border radius for round elements.
 */

/** @type {Theme} */
export default {
  colors: {
    primary: '#FF3B30',
    secondary: '#F1F1F1',
    tertiary: '#FFFFFF',
    primaryBackground: '#FFFFFF',
    secondaryBackground: 'rgba(249,249,249,0.94)',
    disabled: '#D1D1D6',
    accent: '#000',
    label: 'rgba(60,60,67,0.3)',
    secondaryLabel: 'rgb(150,150,150)',
  },
  typography: {
    family: undefined,
  },
  roundness: 12,
};
