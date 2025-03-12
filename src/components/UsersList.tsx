import { useQuery } from '@tanstack/react-query';

import * as User from '@/api/user';

export const UsersList = () => {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: User.getUsers
  });

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {
        users.map(user => (
          <li key={ user.id }>
            { user.fullName } - { user.email }
          </li>
        ))
      }
    </ul>
  );
};
