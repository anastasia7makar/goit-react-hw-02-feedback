import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => {
      return (
        <li key={option}>
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
