import PropTypes from 'prop-types';
import {
  FriendsWrapper,
  FriendsListItem,
  OnlineBadge,
} from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsWrapper>
      {friends.map(friend => (
        <FriendsListItem key={friend.id}>
          <OnlineBadge active={friend.isOnline}></OnlineBadge>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="90"
          />
          <p class="name">{friend.name}</p>
        </FriendsListItem>
      ))}
    </FriendsWrapper>
  );
};

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
