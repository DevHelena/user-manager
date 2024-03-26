import FormUsers from "../components/FormUsers/FormUsers"
import ViewUsers from "../components/ViewUsers/ViewUsers"

const Home = () => {

  return (
    <div className="container">
      <FormUsers title="Adcionar Usuário" button="Adcionar" typeReq="post" id={undefined} setUser={undefined}/>
      <ViewUsers/>
    </div>
  )
}

export default Home