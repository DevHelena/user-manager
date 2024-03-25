import { useState } from 'react';
import axios from 'axios';
import './style.css'
import { useContext } from 'react';
import { UsersContext, UsersContextType } from "../../context";
import { IUser } from '../../types';

interface IFormProps {
  title: string,
  button: string,
  typeReq: string
}

const FormUsers = ({title, button, typeReq}: IFormProps) => {
  const { setUsers } = useContext<UsersContextType | any >(UsersContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:3000/users', { username, password });

      setUsers((prevUsers : IUser[]) => [
        ...prevUsers,
        {
          username,
          password,
          id: response.data.id
        }
      ])

      setUsername('');
      setPassword('');

    } catch (error) {
      console.error('Erro ao fazer requisição:', error);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => {setUsername(event.target.value)}}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">{button}</button>
      </form>
    </div>
  );
};

export default FormUsers;