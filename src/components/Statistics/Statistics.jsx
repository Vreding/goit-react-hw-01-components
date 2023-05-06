import PropTypes from 'prop-types';
import { StatisticSection, StatisticListItem } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticSection>
      {typeof title === 'string' && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => (
          <StatisticListItem key={stat.id} id={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </StatisticListItem>
        ))}
      </ul>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
