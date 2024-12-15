
import User from './profile/Profile';
import FriendList from './friendlist/FriendList';
import Transactions from './transactionhistory/TransactionHistory'
import userData from "../../userData.json";
import friendsList from "../../friends.json";
import transactionsList from "../../transactions.json";


export default function App() {
  return (
    <main>
      <User
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList
        friends={friendsList}
      />

      <Transactions
        transactions={transactionsList}
      />

    </main>
  );
}
