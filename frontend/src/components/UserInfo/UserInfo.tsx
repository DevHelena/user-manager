import { IUser } from '../../types';
import { Link } from 'react-router-dom';

interface UserInfoProps {
  user?: IUser;
}

const UserInfo = ({user}: UserInfoProps) => {

  if(!user) {
    <p>loading...</p>
  }

  return (
    <Link to={`/user/${user?.id}`}>
      <table>
        <tr>
          <td>Nome:</td>
          <td>{user?.username}</td>
        </tr>
        <tr>
          <td>Senha:</td>
          <td>{user?.password}</td>
        </tr>
        <tr>
          <td>ID:</td>
          <td>{user?.id}</td>
        </tr>
      </table>  
    </Link>
  )
}

export default UserInfo