import { useQuery } from '@tanstack/react-query'

import * as User from "/src/api/user";

export const UsersList = () => {
  const {data: users = []} = useQuery({
    queryKey: ["users"],
    queryFn: User.getUsers
  });

  return (
    <ul>
      {
        users.map(user => (
          <li key={user.id}>
            {user.fullName} - {user.email}
          </li>
        ))
      }
    </ul>
  )
}
