import { useParams } from 'react-router'
import {useQuery} from '@tanstack/react-query';
import * as User from '/src/api/user';

export const UserProfile = () => {
  const { id } = useParams();

  const {data: user = null} = useQuery({
    queryKey: ["user", id],
    queryFn: () => User.getUser(id)
  });

  return (
    <div>
      {
        user !== null ? (
          <ul>
            <li>
              Full Name: {user.fullName}
            </li>
            <li>
              E-mail: {user.email}
            </li>
          </ul>
        ) : 'User Not Found'
      }
    </div>
  )
}
