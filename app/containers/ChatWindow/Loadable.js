/**
 *
 * Asynchronously loads the component for ChatWindow
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
