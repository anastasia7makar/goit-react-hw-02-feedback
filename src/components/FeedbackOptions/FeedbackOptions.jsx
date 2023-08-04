import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.list}>
    {options.map(option => {
      return (
        <li key={option} className={css.item}>
          <button name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
