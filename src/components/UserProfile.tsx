import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import * as User from '@/api/user';

export const UserProfile = () => {
  const { id } = useParams<{ id: string }>();

  const { data: user = null } = useQuery({
    queryKey: ['user', id],
    queryFn: () => id ? User.getUser(id) : null
  });

  return (
    <div>
      {
        user !== null ? (
          <ul>
            <li>
              Full Name: { user.fullName }
            </li>
            <li>
              E-mail: { user.email }
            </li>
          </ul>
        ) : 'User Not Found'
      }
    </div>
  );
};
