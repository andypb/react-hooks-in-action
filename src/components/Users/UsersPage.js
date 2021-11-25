import UsersList from "./UsersList";
import {useState} from "react";
import UserDetails from "./UserDetails";

export default function UsersPage () {

  const [user, setUser] = useState(null);

  return (
    <main className="users-page">
      <UsersList setUser={setUser}/>
      <UserDetails user={user}/>
    </main>
  );
}