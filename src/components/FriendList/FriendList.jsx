// import { FriendsListUl } from './FriendList.styled';
import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem';
import { FriendsListUl } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <div>
      <FriendsListUl>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendsListItem friend={friend} />
          </li>
        ))}
      </FriendsListUl>
    </div>
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
