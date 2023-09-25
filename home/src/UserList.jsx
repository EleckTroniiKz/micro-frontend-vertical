import React from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "./users";
import Button from "./Button";

export default function UserList({ users, onEdit }) {
  const [deleted, setDeleted] = React.useState(false);

  if (deleted) {
    setDeleted(false);
    location.reload();
  }

  return (
    <div className="p-3 bg-blue-600 text-white text-left w-full rounded-lg mb-8">
      <table className="w-full">
        <tbody className="w-full divide-y divide-black divide-x">
          {users?.map((user) => (
            <tr key={user.id} className="w-full table flex ">
              <td className="w-1/4 ">{user.name}</td>
              <td className="w-1/4 ">{user.gender}</td>
              <td className="w-1/4 ">{user.country}</td>
              <td className="w-1/4 ">{user.height}</td>
              <td className="w-1/5 ">
                {user.id !== 0 && (
                  <Link to={`/users/${user.id}`}>
                    <div>Edit</div>
                  </Link>
                )}
              </td>
              <td>
                {user.id !== 0 && (
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
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
