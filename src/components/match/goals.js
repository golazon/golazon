import { h, Component } from 'preact';

export default class Goals extends Component {
  render () {
    const { match } = this.props;

    if (!match.goals || match.goals.length === 0) {
      return null;
    }

    return (
      <div class="match__goals">
        <h2>Goals</h2>
        <p>
          {match.goals.map(goal => (
            <span>
              {goal.name} {goal.min}&apos;&nbsp;
              {goal.code !== 'G' && `[${goal.code}] `}
              (<strong>{goal.score[0]}:{goal.score[1]}</strong>)
            </span>
          ))}
        </p>
      </div>
    );
  }
}
