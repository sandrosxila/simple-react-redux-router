import { useQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';
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
    <motion.ul initial="hidden" animate="visible" variants={
      {
        visible: {
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.05
          }
        }
      }
    }>
      {
        users.map(user => (
          <motion.li variants={
            {
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1
              }
            }
          } key={ user.id }>
            { user.fullName } - { user.email }
          </motion.li>
        ))
      }
    </motion.ul>
  );
};
