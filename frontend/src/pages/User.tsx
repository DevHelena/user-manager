import UserInfo from "../components/UserInfo/UserInfo"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { IUser } from "../types"
import FormUsers from "../components/FormUsers/FormUsers"
//import { useContext } from 'react';
//import { UsersContext, UsersContextType } from "../context";


const User = () => {
  //const { users, setUsers } = useContext<UsersContextType | any>(UsersContext);  
  const params = useParams()
  const userId = String(params.id)

  const [user, setUser] = useState<IUser>()
  
  useEffect(() => {
    const getUserById = async () => {
      await axios.get(`http://localhost:3000/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch(() => console.log('Error'))
    }

    getUserById();
  }, []);

  const deleteUserById = async () => {
    await axios.delete(`http://localhost:3000/users/${userId}`)
    .then((response) => setUser(response.data))
    .catch(() => console.log('Error'))
  }

  if(!user?.id) {
    <p>loading</p>
  }

  return (
    <div className="container">
      <FormUsers title="Editar Usuário" button="Editar" typeReq="put" id={userId} setUser={setUser}/>
      <UserInfo user={user}/>
      <Link to="/"> <button style={{background: "rgb(136, 64, 64)"}} onClick={deleteUserById}>Delete User</button> </Link>
    </div>
  )
}

export default User