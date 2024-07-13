import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import userData from "./components/userData.json";
import Profile from "./components/profile.jsx";
import FriendList from "./components/friendList.jsx";
import friends from "./components/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;

// import FriendList from "./components/friendList";
// import friends from "./friends.json";

// const App = () => {
//   return (
//     <div className="app">
//       <FriendList friends={friends} />
//     </div>
//   );
// };
