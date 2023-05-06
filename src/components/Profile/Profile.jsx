import PropTypes from 'prop-types';
import { DescriptionDiv, StatsLi, StatsUl, Wrapper } from './Profile.styled';

export const Profile = ({
  item: { username, tag, location, avatar, stats },
}) => {
  return (
    <Wrapper>
      <DescriptionDiv>
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </DescriptionDiv>

      <StatsUl>
        <StatsLi>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </StatsLi>
        <StatsLi>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </StatsLi>
        <StatsLi>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </StatsLi>
      </StatsUl>
    </Wrapper>
  );
};

Profile.propTypes = PropTypes.object.isRequired;
