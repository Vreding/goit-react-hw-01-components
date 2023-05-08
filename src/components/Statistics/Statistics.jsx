import PropTypes from 'prop-types';
import { StatisticSection, StatisticListItem } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticSection>
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticListItem key={id} id={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
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
