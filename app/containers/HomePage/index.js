import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import LoadingIndicator from 'components/LoadingIndicator';
import injectSaga from 'utils/injectSaga';

import {
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import User from '../../components/User/index';

import ErrorContainer from './ErrorContainer';
import ErrorMessage from './ErrorMessage';
import Container from './Container';

import { loadUsers } from '../App/actions';

import saga from './saga';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.loadUsers();
    }
  }

  // better some user Id
  renderUser = (user, index) => (
    <User key={`${user.lastName}_${index}`} user={user} />
  );

  render() {
    const { loadingError, users, loading } = this.props;

    return (
      <Container>
        {loadingError && (
          <ErrorContainer>
            <FormattedMessage {...messages.errorMessage} />
            <ErrorMessage>{loadingError}</ErrorMessage>
          </ErrorContainer>
        )}
        {loading && <LoadingIndicator />}
        {users.length && users.map(this.renderUser)}
      </Container>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  loadingError: PropTypes.string,
  users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadUsers: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
  };
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  loadingError: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);
