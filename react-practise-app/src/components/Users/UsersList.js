import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.username} ({user.age}) years old
            </li>
          );
        })}
        dasd
      </ul>
    </Card>
  );
};

export default UsersList;
