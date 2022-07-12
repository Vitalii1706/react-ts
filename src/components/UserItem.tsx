import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user , onClick}) => {
  return (
    <div onClick={()=> onClick(user)} key={user.id} style={{ padding: 15, border: '1px solid grey' }}>
      {user.id}. {user.name} проживає в місті {user.address.city} на вулиці {user.address.street}
    </div>
  );
};

export default UserItem;
