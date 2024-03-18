import Profile from "./components/profile/Profile";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import userData from "../src/userData.json";
import friends from "../src/friends.json";
import transactions from "./friends.json";
import "./App.css";

export default function App() {
  return (
    <>
      <p className="title">Task 1</p>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <p className="title">Task 2</p>
      <FriendList friends={friends} />
      <p className="title">Task 3</p>
      <TransactionHistory items={transactions} />
    </>
  );
}

