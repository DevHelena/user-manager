import { createContext, useState, ReactNode } from 'react';
import { IUser } from './types';

interface UsersProviderProps {
  children: ReactNode;
}

export interface UsersContextType {
  users: IUser[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction< IUser[] >>;
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined);

export function UserProvider({children} : UsersProviderProps) {
  const [users, setUsers] = useState<IUser[]>([])
  
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}