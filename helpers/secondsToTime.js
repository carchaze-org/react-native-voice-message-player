/**
 * Convert seconds to a time format (MM:SS).
 *
 * @param {number} seconds - Total seconds.
 * @returns {string} Time in MM:SS format.
 */
const secondsToTime = seconds => {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const remainingSeconds = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
};

export default secondsToTime