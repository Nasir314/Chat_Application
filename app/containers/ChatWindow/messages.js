/*
 * ChatWindow Messages
 *
 * This contains all the text for the ChatWindow container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ChatWindow';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ChatWindow container!',
  },
});
