import PropTypes from 'prop-types';
import { FriendsListLi, OnlineBadge } from './FriendListItem.styled';

export const FriendsListItem = ({ friend }) => {
  return (
    <FriendsListLi>
      <OnlineBadge active={friend.isOnline}></OnlineBadge>
      <img class="avatar" src={friend.avatar} alt="User avatar" width="90" />
      <p class="name">{friend.name}</p>
    </FriendsListLi>
  );
};

FriendsListItem.prototype = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
