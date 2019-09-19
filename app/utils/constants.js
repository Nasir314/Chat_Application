export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

// For responsiveness
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

// Color global code
export const ButtonAndBackgroundColor = '#42425D';
export const BackgrounColorScreen = '#eaeaf1';
export const BackgrounColorScreenDark = '#d7d7e0';
export const BackgrounColorCard = '#a3a0f1';
export const WhiteColor = '#FFF';
export const BlackColor = 'black';
export const Grey = '#757575';
export const LightGrey = 'lightgrey';

// previous color
// export const Blue = "#66a8ff"
// with new design color
export const Blue = '#1976d2';
export const DeepPurple = '#9575cd';
export const Red = 'red';
export const GreyUnderQuestion = '#67757'


// Color for new Design
export const TestBtnBlue = '#1976d2';

// For not applicable or undefine
export const NA = 'NA';
export const NULL = null;

