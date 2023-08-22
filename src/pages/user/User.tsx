import Single from "../../components/single/Single"
import { singleUser } from "../../data"
import "./User.scss"

const User = () => {

    //fetch data and send to Single component
    
  return (
    <div className="user">
        <Single {...singleUser}/>
    </div>
  )
}

export default User
