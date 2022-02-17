import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user,id) => {
          return (
            <li key={id}>
              {user.username} ({user.age}) years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
