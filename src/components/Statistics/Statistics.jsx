import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statisticArray = [
    { statItem: good, title: 'Good' },
    { statItem: neutral, title: 'Neutral' },
    { statItem: bad, title: 'Bad' },
    { statItem: total, title: 'Total feedbacks' },
    { statItem: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <ul className={css.list}>
      {statisticArray.map(({ statItem, title }) => {
        return (
          <li key={title} className={css.item}>
            <p className={css.title}>
              {title}:{' '}
              <span className={css.text}>
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
