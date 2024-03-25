import { useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useContext } from 'react';
import { UsersContext, UsersContextType } from "../../context";
import { IUser } from '../../types';
import UserInfo from '../UserInfo/UserInfo';


const ViewUsers = () => {
  const { users, setUsers } = useContext<UsersContextType | any>(UsersContext);  

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    };

    getAllUsers();
  }, []);


  return (
    <div>
      {users.map((user: IUser) => (
        <UserInfo user={user}/>
      ))}     
    </div>
  );
};

export default ViewUsers;
