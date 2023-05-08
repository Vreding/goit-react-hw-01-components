import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import user from './dataFiles/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './dataFiles/data.json';
import { FriendsList } from './FriendList/FriendList';
import friends from './dataFiles/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './dataFiles/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <GlobalStyle />
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
