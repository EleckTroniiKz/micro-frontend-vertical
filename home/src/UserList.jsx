import React from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "./users";
import Button from "./Button";

export default function UserList({ users }) {
  const [deleted, setDeleted] = React.useState(false);

  if (deleted) {
    setDeleted(false);
    location.reload();
  }
  if (!users || users.length === 0) {
    return <div>There are no users!</div>;
  }

  return (
    <div
      id="user-list"
      className="p-3 bg-blue-600 text-white text-left w-full rounded-lg mb-8"
    >
      <table className="w-full">
        <tbody className="w-full divide-y divide-black divide-x">
          {users?.map((user) => (
            <tr
              key={user.id}
              id={`User-${user.id}`}
              className="w-full table flex "
            >
              <td className="w-1/4 ">{user.name}</td>
              <td className="w-1/5 ">{user.gender}</td>
              <td className="w-1/4 ">{user.country}</td>
              <td className="w-1/4 ">{user.height}</td>
              <td className="w-1/4 ">
                {
                  <Link to={`/users/${user.id}`}>
                    <div>Edit</div>
                  </Link>
                }
              </td>
              <td>
                {
                  <Link to={`/`}>
                    <Button
                      onClick={() => {
                        deleteUser(user.id);
                        setDeleted(true);
                      }}
                    >
                      Delete
                    </Button>
                  </Link>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
