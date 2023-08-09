import RNVoiceMessagePlayer from './RNVoiceMessagePlayer';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export {default as theme} from './helpers/theme';

export {default as ProfileComponent} from './components/Avatar';
export {default as TrackerLineComponent} from './components/TrackerLine';
export {default as LeftActionComponent} from './components/PlayPauseButton';
export {default as DownloadProgressBarComponent} from './components/DownloadProgressBar';
export {default as BottomTimesComponent} from './components/TrackerTimers';
export default RNVoiceMessagePlayer;
