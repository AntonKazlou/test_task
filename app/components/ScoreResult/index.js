import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, IntlProvider } from 'react-intl';

import Container from './Container';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class ScoreResult extends React.PureComponent {
  render() {
    const { value } = this.props;

    return (
      <Container>
        <IntlProvider locale="en">
          <FormattedMessage {...messages.scoreSummary} />
        </IntlProvider>
        {`: ${value}`}
      </Container>
    );
  }
}

ScoreResult.propTypes = {
  value: PropTypes.number,
};

export default ScoreResult;
