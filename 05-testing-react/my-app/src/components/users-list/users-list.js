import React, { useEffect, useState } from "react";
import getRandomUser from "../../utils/get-random-user";
import User from "../user/user";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getRandomUser(5);
        const users = userData.results;

        const fetchedUsers = users.map((user) => {
          return {
            email: user.email,
            firstName: user.name.first,
            lastName: user.name.last,
            age: user.dob.age,
            pictureURL: user.picture.large,
            city: user.location.city,
            country: user.location.country,
          };
        });
        setUsers(fetchedUsers);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <i>Loading users...</i>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <User key={index} {...user} />
      ))}
    </div>
  );
};

export default UsersList;
