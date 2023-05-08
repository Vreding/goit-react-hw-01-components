import PropTypes from 'prop-types';
import { DescriptionDiv, StatsLi, StatsUl, Wrapper } from './Profile.styled';

export const Profile = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
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
          <span class="quantity">{followers}</span>
        </StatsLi>
        <StatsLi>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </StatsLi>
        <StatsLi>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </StatsLi>
      </StatsUl>
    </Wrapper>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
