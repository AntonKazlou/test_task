/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  errorMessage: {
    id: `${scope}.home`,
    defaultMessage: 'Error loading data',
  },
});
