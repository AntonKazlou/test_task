import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { FormattedMessage, IntlProvider } from 'react-intl';

import NameContainer from './NameContainer';
import UserInfo from './UserInfo';

import { calculateResults } from '../../utils/calculateResults';
import { roundPlus } from '../../utils/utils';

import messages from './messages';

import ScoreResult from '../ScoreResult/index';

class User extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scoreSummary: 0,
      selectedItemsId: [],
    };
  }

  onChangeHandler = (e, task) => {
    const { selectedItemsId, scoreSummary } = this.state;
    const newArray = selectedItemsId.slice();

    if (selectedItemsId.indexOf(task.id) !== -1) {
      this.setState({
        selectedItemsId: selectedItemsId.filter(id => id !== task.id),
        scoreSummary: roundPlus(scoreSummary - task.score, 2),
      });
    } else {
      newArray.push(task.id);
      this.setState({
        selectedItemsId: newArray,
        scoreSummary: roundPlus(scoreSummary + task.score, 2),
      });
    }
  };

  getUserResult(task) {
    const { user } = this.props;

    return calculateResults(user.age, task.score) ? (
      <IntlProvider locale="en">
        <FormattedMessage {...messages.resultMessage} />
      </IntlProvider>
    ) : (
      ''
    );
  }

  render() {
    const { user } = this.props;

    return (
      <UserInfo>
        <NameContainer>{`${user.firstName} ${user.lastName} - ${
          user.age
        } years old`}</NameContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right"> </TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">description</TableCell>
              <TableCell align="right">score</TableCell>
              <TableCell align="right">results</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.tasks.map(task => (
              <TableRow key={task.title}>
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={event => this.onChangeHandler(event, task)}
                  />
                </TableCell>
                <TableCell align="right">{task.title}</TableCell>
                <TableCell align="right">{task.description}</TableCell>
                <TableCell align="right">{task.score}</TableCell>
                <TableCell align="right">{this.getUserResult(task)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {this.state.scoreSummary > 0 && (
          <ScoreResult value={this.state.scoreSummary} />
        )}
      </UserInfo>
    );
  }
}

User.propTypes = {
  user: PropTypes.object,
};

export default User;
