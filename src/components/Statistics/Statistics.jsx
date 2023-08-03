import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statisticArray = [
    { statItem: good, title: 'Good' },
    { statItem: neutral, title: 'Neutral' },
    { statItem: bad, title: 'Bad' },
    { statItem: total, title: 'Total feedbacks' },
    { statItem: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <ul>
      {statisticArray.map(({ statItem, title }) => {
        return (
          <li key={title}>
            <p>
              {title}:{' '}
              <span>
                {title !== 'Positive feedbacks'
                  ? statItem
                  : positivePercentage + '%'}
              </span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
